'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
function getDefaultPlugins(){
  return [
    new ExtractTextPlugin('app.css')
  ];
}

function getDefaultModules(){
  return {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader?outputStyle=expanded&indentedSyntax')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader?outputStyle=expanded')
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract('css-loader!less-loader')
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules,
  getDefaultPlugins: getDefaultPlugins
};
