'use strict'
const path = require('path')
const { resolve } = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        },{
          test: /\.css$/,
          use:['style-loader','css-loader'],
          include: __dirname
        }, {
          test: /\.svg$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml',
          include: path.join(__dirname, 'public')
        }, {
          test: /\.png$/,
          loader: 'url-loader?mimetype=image/png',
          include: path.join(__dirname, 'public')
        }, {
          test: /\.jpg$/,
          loader: 'url-loader?mimetype=image/jpg',
          include: path.join(__dirname, 'public')
        }, {
          test: /\.gif$/,
          loader: 'url-loader?mimetype=image/gif',
          include: path.join(__dirname, 'public')
        }, {
          test: /\.(ico)$/,
          loader: 'static-loader'
        },
        {test: /\.pdf$/,
          loader: 'file-loader',
          include: path.join(__dirname, 'public')
        }
    ]
  }
}
