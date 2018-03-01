var path = require('path');
var NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/components/app'
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  watch: NODE_ENV == 'development',

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' для webpack 1
    },
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      {
        test: /\.scss$/,
        loader: 'sass-loader'
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      /*{
        // I want to uglify with mangling only app files, not thirdparty libs
        test: /.js$/,
        exclude: /sass.sync.js/, // excluding .spec files
        use: {
          loader: 'uglify-loader',
          options: {
            ecma: 6,
            nameCache: null,
            sourceMap: false,
            warnings: false
          }
        }
      },*/
      // translate ES2015 to ES5
      {
        test: /\.js$/,
        //exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }//,
        //include: ['views', 'node_modules/vue-awesome']
      }
    ]
  }
};
