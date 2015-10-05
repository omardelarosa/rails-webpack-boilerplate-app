'use strict';

var path    = require('path'),
    webpack = require('webpack'),
    config  = require('./config.json');

module.exports = {
  context: path.join(__dirname, './../../'),
  entry: {
    main: config.webpack.path + 'main'
  },
  output: {
    path: config.webpack.build,
    publicPath: '/assets/build/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js'
  },
  externals: {},
  resolve: {
    modulesDirectories: ['node_modules', 'vendor/assets/bower_components'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /.js$/,
      exclude: /node_modules(?!.*(\/rx-theme))/, // ignore node_modules except node_modules/js-csp
      //exclude: /node_modules/,
      loader: 'babel-loader?optional=runtime'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass',
    },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
    { test: /\.css$/, exclude: /\.useable\.css$/, loader: "style!css" },
    { test: /\.useable\.css$/, loader: "style/useable!css" },
  ]
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ResolverPlugin([new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])])
  ]
};
