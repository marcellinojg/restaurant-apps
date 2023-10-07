const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    static: path.resolve(__dirname, 'dist'),
    allowedHosts: 'all',
    port: 3003,
    open: true,
    client: {
      overlay: {
        errors: true,
        warnings: true
      }
    },
    hot: false,
    liveReload: true,
    compress: true,
    historyApiFallback: true
  }
})
