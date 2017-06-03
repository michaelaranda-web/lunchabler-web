const webpack = require('webpack');
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: APP_DIR + '/assets/javascripts/index.jsx',
  output: {
    path: BUILD_DIR + '/javascripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};