<template>
<div v-if="!context.loading">
  <h2>{{context.title.rendered}}</h2>
  <article v-if="context.content.rendered" v-html="context.content.rendered"></article>
  <pre v-else style="max-height:33vh;">{{context}}</pre>
</div>
</template>

<script>
import WpAsync from '../components/WpAsync.vue';

export default {
  name:"Page",
  extends: WpAsync,
  metas(){
    return {
      title: !this.context.loading ? this.context.title.rendered : ''
    }
  },
  methods:{
    fetch(WP){
      let
      post = this.$route.query.wpid || this.$route.params.pid,
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

<style lang="scss" scoped>
@import "~@/styles/mixin/fluidType";
h2 {
  @include fluidType;
}
</style>
