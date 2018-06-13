module.exports = {
  baseUrl: '/clients/BGLJ/',

  css:       { extract: true,     },
  devServer: { host:    "0.0.0.0" },

  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias:{}
    },
    externals:{
      wpapi: 'WPAPI'
    },
  },
}