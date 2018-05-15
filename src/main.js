import Vue from 'vue'
import App from '@/App.vue'

import '@/includes/use.log'
import '@/includes/use.async-computed'
import router from '@/includes/use.router'

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false