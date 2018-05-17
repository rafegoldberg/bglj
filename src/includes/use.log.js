import Vue from 'vue'

if (process.env.NODE_ENV == 'development'){
  Vue.prototype.$log = console.log.bind(console)
  console.log({
    VUECONF: Vue.config,
    NODEENV: process.env.NODE_ENV
  })
}
else console.log({ VUECONF: Vue.config })

else
  Vue.prototype.$log = new Function;
