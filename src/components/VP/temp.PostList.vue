<template>
<div>
  
  <div v-if="!context.loading && !context.error">
    <slot name="item" v-for="item in context">
      <MediaBox :title="item.title.rendered"
        :text="item.excerpt.rendered"
        :image="item.acf.image"
        :slug="`/posts/${item.slug}`">
        <router-link tag=button :to="`/posts/${item.slug}`">Read More</router-link>
      </MediaBox>
    </slot>
  </div>
  
  <small>
    <router-link tag=b append :to="{
        path: '.',
        query:{ page: this.page - 1 || 1 }
        }">
      <a>⇠Prior</a>
    </router-link> / 
    <router-link tag=b append :to="{
        path: '.',
        query:{ page: this.page + 1 }
        }">
      <a>Next⇢</a>
    </router-link>
  </small>
  
</div>
</template>

<script>
import VpList from './list';

export default {
  name:'PostList',
  extends: VpList,
  methods:{
    fetch(WP){
      let page = this.$route.query.page
      return this.endpoint.perPage(3).page( page || 1 )
    },
  },
  computed:{
    page(){
      let
      page = this.$route.query.page
      page = parseInt(page)
      return ( page && page>0 ) ? page : 1
    }
  }
}
</script>

<style lang="scss">
.MediaBox {
  margin-bottom: 2em;
  & + & {
    margin-top: 2em;
  }
  button {
    margin-top: 1rem;
    padding: 0.5em;
    font: inherit;
    font-size: .63em;
    line-height: 1;
    border: 1px solid #DDD;
    border-radius: 3px;
  }
}
</style>
