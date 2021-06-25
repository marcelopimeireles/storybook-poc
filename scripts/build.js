const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
const scss = require('postcss-scss')
const cssnano = require('cssnano')
const fs = require('fs')
const glob = require("glob")
const transformImports = require("transform-imports");
const ncp = require('ncp').ncp;

const libPath = './lib/';

/**
 * Processes component Scss files and generates js files with inline
 * string css styles minified and prefixed
 * 
 * @param {*} cssFile - path to the scss file to be processed
 */
function processCss(cssFile) {
  fs.readFile( cssFile, function (err, data) {
    if (err) {
      throw err; 
    }
    console.log(`Processing SCSS for '${cssFile}'...`);

    // Makes a copy to be used externally if needed
    const scssOutFile = libPath + 'styles/components/' + cssFile.split('/').pop();
    fs.writeFile(scssOutFile, data, 'utf8', function (err) {
      if (err) return console.log(err);
    });

    postcss([precss, autoprefixer, cssnano])
      .process(data, {from: cssFile, syntax: scss})
      .then(result => {
        result.warnings().forEach(warn => {
          console.warn(warn.toString())
        })
        const escapedCss = result.css.replace(/\\/g, "\\\\");
        const code = "const styles = `" + escapedCss + "`;\n\nexport default styles;\n";
        const targetFile = cssFile.substr(6);
        fs.writeFile(libPath + targetFile + '.js', code, 'utf8', function (err) {
          if (err) return console.log(err);
        });
      });
  });
}

/**
 * Processes all components scss files
 * 
 * @param {*} cssFile - path to the scss file to be processed
 */
function processCssFiles() {
  fs.mkdir(libPath + 'styles/components/', { recursive: true }, (err) => {
    if (err) throw err;
  });
  glob("./src/components/**/*.scss", function (er, files) {
    files.forEach((fileName) => {
      processCss(fileName);
    });
  });
}

/**
 * replaces all scss imports and transforms them into .js imports
 * replaces all .ts imports to .js imports
 */
function replaceImports() {
  glob(`${libPath}**/*.js`, function (er, files) {

    files.forEach((fileName) => {
      fs.readFile(fileName, function (err, data) {
        if (err) {
          throw err; 
        }
        console.log(`Processing imports for '${fileName}'`);

        const newCode = transformImports(data, (importDefs) => {
          importDefs.forEach((importDef) => {
            if (importDef.source.endsWith('.scss')) {
              importDef.source = importDef.source + '.js';
            }
            if (importDef.source.endsWith('.ts')) {
              importDef.source = importDef.source.substr(0, importDef.source.length - 3) + '.js';
            }
          });
        });
        fs.writeFile(fileName, newCode, 'utf8', function (err) {
          if (err) return console.log(err);
        });
      });
    });  
  });
}

function generateEntrypoints() {
  glob(`${libPath}components/**/*.js`, function (er, files) {
    let globalImportCode = '';
    files.forEach((file) => {
      if (file.indexOf('scss.js') !== -1) {
        // Only js files that are not scss are components
        // Eventually a better rule should be used to detect component files...
        return;
      }
      const targetFile = file.split('/').pop();
      const importPath = './' + file.substr(file.indexOf('components'));
      const code = `export * from '${importPath}';\n`;
      globalImportCode += code;
      fs.writeFile(libPath + targetFile, code, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
    fs.writeFile(libPath + 'index.js', globalImportCode, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
}
generateEntrypoints();

processCssFiles();
replaceImports();

ncp('./public/assets', './lib/assets');
ncp('./public/styles', './lib/styles');
ncp('./public/package.json', './lib/package.json');
