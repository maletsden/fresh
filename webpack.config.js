var path = require('path');
//var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './static/server'
  },

  target: 'node',
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  watch: true,

  watchOptions: {
    aggregateTimeout: 300
  },

  module: {
    rules: [
      // translate ES2015 to ES5
      {
        // I want to uglify with mangling only app files, not thirdparty libs
        test: /.js$/,
        use: {
          loader: 'uglify-loader',
          options: {
            ecma: 6,
            nameCache: null,
            sourceMap: false,
            warnings: false
          }
        }
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ["transform-runtime"]
          }
        }
      }/*, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }*/
    ]
  }
};
