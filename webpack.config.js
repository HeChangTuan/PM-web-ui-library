// Base Webpack configuration.
//
// Not using ES6 syntax here because this file
// is not processed with Babel on server side.
// See `./rendering-service/index.js` for more info.

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const clearConsole = require('react-dev-utils/clearConsole')

const projectFolder = path.resolve(__dirname, '.')

module.exports = {
  // Resolve all relative paths from the project root folder
  mode: 'development',
  context: projectFolder,
  entry: './src/index.js',
  output: {
    // Filesystem path for static files
    path: path.resolve(projectFolder, 'build/assets'),

    // Network path for static files
    publicPath: '/',

    // Specifies the name of each output entry file
    filename: '[name].[hash].js',

    // Specifies the name of each (non-entry) chunk file
    chunkFilename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Any png-image or woff-font below or equal to 5K
              // will be converted to inline base64 instead.
              limit: 5120
            }
          }
        ]
      }
    ]
  },

  // Hides "Entrypoint size exeeds the recommened limit (250kB)" warnings.
  // https://github.com/webpack/webpack/issues/3486
  performance: {
    hints: false
  },

  // Plugins will be added to this array by extending configurations.
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    // quiet: true,
    compress: true,
    port: 9999,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errorDetails: false,
      publicPath: false
    },
    before() {
      clearConsole()
    }
  }
}
