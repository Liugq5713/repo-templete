const webpack = require('webpack')
const merge = require('webpack-merge')
const ManifestPlugin = require('webpack-manifest-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new ManifestPlugin(),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({})
  ]
})
