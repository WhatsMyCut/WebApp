const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const srcDirectory = path.resolve('./src');
const nodeModulesDirectory = path.resolve('node_modules');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMd5Hash = require("webpack-md5-hash");


var isProduction = process.env.NODE_ENV === 'production'

var getPlugins = () => {
  var plugins = [
    new CleanWebpackPlugin('build', {} ),
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
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/),
    new MiniCssExtractPlugin({
        filename: "style.css",
        //filename: './src/styles/' + isProduction ? '[name].[hash].css' : '[name].css',
        //chunkFilename: './build/styles/' + isProduction ? '[id].[hash].css' : '[id].css',
    }),
    new WebpackMd5Hash()
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
  devtool: isProduction ? 'source-map' : 'eval',
  entry: {
    context: path.join(__dirname, 'main'),
    main: "./main",
    // Analyzed with `webpack-bundle-size-analyzer`
    // to put largest dependencies by size into the vendor bundle
    // Vendor dependencies account for over 80% of total JS size
    // June 7, 2016
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'lodash',
      'jquery',
    ]
  },
  output: {
    path: path.join(__dirname, 'src', 'assets', 'scripts'),
    filename: 'upli.js',
    publicPath: '/',
    chunkFilename: '[id].[hash].js'
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            styles: {
                name: 'styles.css',
                test: /\.(sc|c|sa)ss$/,
                chunks: 'all',
                enforce: true
            },
            'common-vendors': {
                test: /[\\/]node_modules[\\/]/,
                name: 'common-vendors',
                chunks: 'initial',
                minChunks: 2
            }
        }
    },
    runtimeChunk: { name: 'runtime' }
  },
  module: {
    rules: [
    {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(srcDirectory, "node_modules/react-native-vector-icons"),
    },
    {
      test: /\.(js|jsx)?$/,
      exclude: [
          [/node_modules|bootstrap-datetimepicker/]
      ],
      loader: 'babel-loader',
      query: {
        presets: [
            ["@babel/env", {
                "useBuiltIns": "usage",
                "modules": false
            }],
            ["@babel/react", {
                "development": true
            }]
        ],
        plugins: [
            ["react-hot-loader/babel"],
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }],
            ["@babel/plugin-transform-modules-commonjs", { "loose": true }],
            ["@babel/plugin-proposal-object-rest-spread"],
            ["@babel/plugin-transform-runtime"],
            ["@babel/plugin-proposal-export-default-from"],
            ["@babel/plugin-proposal-json-strings"],
            ["@babel/plugin-syntax-dynamic-import"],
            ["@babel/plugin-syntax-import-meta"],
            ["@babel/plugin-transform-block-scoping"],
            ["@babel/plugin-transform-object-assign"],
            ["@babel/plugin-transform-react-jsx"],
            ["@babel/plugin-transform-react-jsx-self"],
            ["@babel/plugin-transform-react-jsx-source"],

            ["module-resolver", {
              "alias": {
              }
            }]
                  ]
      }
    },
    {
        test: /\.(sa|sc|c)ss$/,
        // Note, the order in which webpack applies
        // loaders on the matching resources is from last to first.
        use:  [
            'style-loader',
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    publicPath: '../'
                }
            },
            'css-loader',
            'postcss-loader',
            'sass-loader'
        ]
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
