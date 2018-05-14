import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const base = 'BGLJ/'
export default new Router({ base, routes, mode:'history' })