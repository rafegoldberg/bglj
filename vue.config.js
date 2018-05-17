module.exports = {
  baseUrl: typeof WP_API_Settings == 'object' ? WP_API_Settings.endpoint.split('wp-json/')[0] : '/BGLJ/',
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