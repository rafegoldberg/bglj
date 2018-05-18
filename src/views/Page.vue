<template>
  <pre>{{context}}</pre>
</template>

<script>
import WpAsync from '../components/WpAsync.vue';

export default {
  name:"Page",
  extends: WpAsync,
  methods:{
    fetch(WP){
      let
      post = this.$route.params.pid,
      ajax = WP[this.endpoint||'pages']()
      if( parseInt(post) ){
        let id = parseInt(post)
        return ajax.id(id).get()
      }
      return ajax.slug(post).get()
    },
  },
}
</script>