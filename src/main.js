import Vue from 'vue'
import App from '@/App.vue'

import '@/lib/use.log'
import '@/lib/use.async-computed'
import router from '@/lib/use.router'

export default new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false