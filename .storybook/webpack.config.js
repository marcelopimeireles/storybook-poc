const path = require('path')
module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
      {
      //  test: /\.ts?$/,
      //  include: path.resolve(__dirname, "../stories/**/*.stories.(js|ts)"),
      //  loaders: [require.resolve('@storybook/source-loader')],
      //  enforce: 'pre',
        test: /\.(stories|story)\.ts$/,
        loader: require.resolve('@storybook/source-loader'),
        exclude: [/node_modules/],
        enforce: 'pre',
      },
      { 
        test: /\.css$/,
        loader: 'css-loader',
        include: path.resolve(__dirname, "../src")
      },
      { 
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.resolve(__dirname, "../public")
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
        include: path.resolve(__dirname, "../src")
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          }
        }
      },
      {
        test: /\.(ttf|eot|svg|png)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path]/[name].[ext]',
            // publicPath: "public/assets/"
          }
        }
      }
    ]
  }
}