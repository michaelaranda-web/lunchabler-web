const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const SERVER_DIR = path.resolve(__dirname, 'bin');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  name: "SSR",
  entry: SERVER_DIR + '/www',
  output: {
    path: BUILD_DIR,
    filename: 'server.js',
  },
  target: 'node',
  externals: nodeExternals(),
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