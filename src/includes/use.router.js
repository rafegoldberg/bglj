import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import routes from '@/routes'
export default new Router({
  
  routes,

  mode: 'history',
  base: '/clients/BGLJ/',

  linkActiveClass: 'open',
  linkExactActiveClass: 'active',
})