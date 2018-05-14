module.exports = {
  baseUrl: '/BGLJ/',
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
  },
  devServer: {
    host: "0.0.0.0"
  },
}