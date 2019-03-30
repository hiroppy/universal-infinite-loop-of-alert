'use strict';

const { resolve } = require('path');
const webpack = require('webpack');
const { smart } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function createConfig(type, config) {
  return smart(
    {
      mode: 'production',
      entry: {
        [type]: resolve('src/index.js')
      },
      output: {
        path: resolve(`dist/${type}`),
        filename: '[name].bundle.js'
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.TYPE': JSON.stringify(type)
        })
      ]
    },
    config
  );
}

const browser = createConfig('browser', {
  plugins: [new HtmlWebpackPlugin()]
});

const node = createConfig('node', {
  target: 'node'
});

module.exports = [browser, node];
