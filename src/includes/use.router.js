import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import routes from '@/routes'
export default new Router({
  base: 'BGLJ/',
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})