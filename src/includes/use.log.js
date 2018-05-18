import Vue from 'vue'

console.log({
  VUECONF: Vue.config,
  NODEENV: process.env.NODE_ENV
})

if( process.env.NODE_ENV=='development' )
  Vue.prototype.$log = console.log.bind(console)
else
  Vue.prototype.$log = new Function;