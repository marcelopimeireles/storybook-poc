const path = require('path');

module.exports = function(config) {
  const fileEntries = [];
  const defaultFileEntry = [{
    pattern: 'src/**/*.test.ts',
    watched: true,
    type: 'module'
  }];

  const testFileEntries = fileEntries.length ? fileEntries : defaultFileEntry;

  config.set({
    basePath: '',
    plugins: [
      'karma-*',
    ],
    frameworks: ['mocha', 'chai'],
    files: [
      {
        pattern:
            'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
        watched: false
      },
      {
        pattern:
            'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
        watched: false
      },
      ...testFileEntries
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.test.ts': ['webpack'],
    },

    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: require.resolve('ts-loader'),
                options: {
                  configFile: 'test/tsconfig.json'
                }
              },
            ],
          },
          { 
            test: /\.css$/,
            loader: 'css-loader',
            include: path.resolve(__dirname, "src")
          },
          { 
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: 'css-modules-typescript-loader',
                options: {
                  modules: false,
                  namedExport: false
                }
              },
              // Translates CSS into CommonJS
           
              {
                loader: "css-loader",
                options: { modules: false }
              },
             
              // Compiles Sass to CSS
              {
                loader: 'sass-loader',
                options: {
                  webpackImporter: false,
                },
              },
              
    
            ],
            // loader: 'css-loader',
            include: path.resolve(__dirname, "src")
          },
          { 
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: path.resolve(__dirname, "public")
          },
        ],
      },
      resolve: {
        extensions: [ '.ts', '.js' ],
      },
    },

    browserDisconnectTimeout: 300000,
    browserNoActivityTimeout: 360000,
    captureTimeout: 420000,
    concurrency: 10,

    client: {
      mocha: {
        reporter: 'html',
        ui: 'tdd',
      },
    },

    // reporters: ['mocha'],

    // Note setting --browsers on the command-line always overrides this list.
    browsers: [
      'ChromeHeadless',
    ],
  });

  if (process.env.USE_SAUCE) {
    if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
      throw new Error(
          'SAUCE_USERNAME and SAUCE_ACCESS_KEY must be set with USE_SAUCE')
    }

    const SAUCE_LAUNCHERS = {
      'sl-edge': {
        base: 'SauceLabs',
        browserName: 'microsoftedge',
        version: 'latest',
        platform: 'Windows 10',
      },
      'sl-ie': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '11',
        platform: 'Windows 8.1',
      },
      'sl-safari-11': {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '11',
        platform: 'macOS 10.13',
      },
      'sl-safari-10': {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '10',
        platform: 'OS X 10.12',
      },
      // 'sl-safari-9': {
      //   base: 'SauceLabs',
      //   browserName: 'safari',
      //   version: '9',
      //   platform: 'OS X 10.11',
      // },
      // 'sl-chrome-41': {
      //   base: 'SauceLabs',
      //   browserName: 'chrome',
      //   version: '41',
      //   platform: 'Linux'
      // },
    };

    config.set({
      sauceLabs: {
        idleTimeout: 600,
        testName: 'MWC Unit Tests',
        build: process.env.SAUCE_BUILD_ID,
        tunnelIdentifier: process.env.SAUCE_TUNNEL_ID,
      },
      // Attempt to de-flake Sauce Labs tests on TravisCI.
      transports: ['polling'],
      browserDisconnectTolerance: 1,
      reporters: ['saucelabs', 'mocha'],

      // TODO(aomarks) Update the browser versions here.
      customLaunchers: SAUCE_LAUNCHERS,
      browsers: [...config.browsers, ...Object.keys(SAUCE_LAUNCHERS)],
    });
  }
};