import Vue from "vue"

/**
 * Configuration
 */

import "@/includes/use.log"
import "@/includes/use.async"
import "@/includes/use.meta"

Vue.config.productionTip = false

/**
 * Root Instance
 */

import App from "@/App.vue"
import router from "@/includes/use.router"

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


/**
 * In-Browser Aliases
 */

// import API from "@/includes/lib/WordpressAPI"

// if( window && process.env.NODE_ENV=='development' ){
//   window.Vue = Vue
//   API.then(WP=>(
//     window.API = WP
//     ))
// }
