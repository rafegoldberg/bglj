<template>
<nav>
  <li v-for="page in pages">
    <router-link :to="`/${page.slug}`" v-html="page.title.rendered"></router-link>
  </li>
</nav>
</template>

<script>
import WP from '@/lib/wp-api';
export default {
  props:{
    parent:{ type:[Number,String,Array], default:0 }
  },
  methods:{
    fetch(API){ return API.pages().parent(this.parent).get() }
  },
  asyncComputed:{
    pages:{
      async get(){
        return await WP.then( this.fetch )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding: .75rem 0 .25rem;
}
li {
  display: block;
  margin: 0 -1rem;
  white-space: nowrap;
  &:first-of-type {
    font-weight: bold;
    border-bottom: .75px solid #000;
  }
  a {
    display: block;
    padding: 1em 1rem;
    text-decoration: none;
    &:hover {
      background: #FAFAFA;
    }
  }
}
</style>
