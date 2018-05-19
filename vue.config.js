module.exports = {
  baseUrl: '/clients/BGLJ/',
  css:{
    extract: false,
  },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    externals:{
      wpapi: 'WPAPI'
    },
  },
  devServer: {
    host: "0.0.0.0"
  },
}