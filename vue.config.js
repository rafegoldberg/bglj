module.exports = {
  baseUrl: '/clients/BGLJ/',

  devServer: {
    host: '0.0.0.0'
  },
  css: {
    extract: true
  },

  configureWebpack: {
    devtool: 'source-map',
    output:{
      chunkFilename: 'js/[name].js',
      filename: 'js/[name].bundle.js'
    },
    resolve: {
      alias:{}
    },
    externals:{
      wpapi: 'WPAPI'
    },
  },
}