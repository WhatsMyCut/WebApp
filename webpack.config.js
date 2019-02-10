var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var srcDirectory = path.resolve('./src');
var nodeModulesDirectory = path.resolve('node_modules');

var isProduction = process.env.NODE_ENV === 'production'

var getPlugins = () => {
  var plugins = [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: srcDirectory + '/index.html',
    }),
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1.5
    }),
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/)
  ]

  if (isProduction) {
    plugins = plugins.concat([
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ])
  }

  return plugins
}

module.exports = {
  entry: {
    main: "./main",
    // Analyzed with `webpack-bundle-size-analyzer`
    // to put largest dependencies by size into the vendor bundle
    // Vendor dependencies account for over 80% of total JS size
    // June 7, 2016
    vendor: [
      'react',
      'react-dom',
      'lodash',
      'jquery',
      'react-router',
      'history'
    ]
  },
  devtool: isProduction ? 'source-map' : 'eval',
  optimization: {
    splitChunks: {
        cacheGroups: {
            'common-vendors': {
                test: /[\\/]node_modules[\\/]/,
                name: 'common-vendors',
                chunks: 'initial',
                minChunks: 2
            }
        }
    },
    runtimeChunk: { name: 'core' }
  },
  output: {
    path: __dirname + '/scripts',
    filename: 'upli.js',
    chunkFilename: '[id].[hash].js'
  },
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules|bootstrap-datetimepicker/,
      loader: 'babel-loader'
    },
    {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(srcDirectory, "node_modules/react-native-vector-icons"),
    },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env', '@babel/react'],
        plugins: [
          ['@babel/plugin-proposal-decorators', { 'legacy': true }],
          ['@babel/plugin-proposal-class-properties', { 'loose': true }],
          ['@babel/plugin-proposal-object-rest-spread'],
          ['@babel/plugin-transform-runtime'],
        //   ['@babel/plugin-transform-modules-commonjs', { 'loose': true }],
        //   ['@babel/plugin-transform-object-assign'],
        //   ['@babel/plugin-transform-react-jsx-source'],
        //   ['@babel/plugin-transform-block-scoping']
        ],
      }
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            query: {
              name:'assets/[name].[ext]'
            }
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        }
      ]
    }]
  },
  resolve: {
    modules: [
      srcDirectory,
      nodeModulesDirectory
    ],
    alias: {
    }
  },
  watchOptions: {
    poll: true
  },
  mode: 'development',
  plugins: getPlugins()
}
