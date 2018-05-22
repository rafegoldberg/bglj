<template>
<div class="PostList">
  
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
  
  <div class="PostList--pagination" v-if="pages>1">
    <router-link append :to="{query:{ page:this.next() }}">
      ⇠Next
    </router-link> / 
    <router-link append :to="{query:{ page:1 }}">
      First
    </router-link> / 
    <router-link append :to="{query:{ page: this.pages }}">
      Last
    </router-link> / 
    <router-link append :to="{query:{ page:this.prev() }}">
      <b>Prior⇢</b>
    </router-link>
  </div>
  
</div>
</template>

<script>
import VpList from './list';

export default {
  name:'PostList',
  extends: VpList,
  metas:{
    title: 'Posts'
  },
  methods:{
    fetch(WP){
      let page = this.$route.query.page
      return this.endpoint.perPage(4).page( page || 1 )
    },
    next(){
      return this.page==1 ? this.pages : this.page-1
    },
    prev(){
      return this.page==this.pages ? 1 : this.page+1
    }
  },
  computed:{
    page(){
      let
      page = this.$route.query.page
      page = parseInt(page)
      return ( page && page>0 ) ? page : 1
    },
    pages(){
      if( this.context.loading || this.context.error ) return 1
      let total = parseInt(this.context._paging.totalPages) || 1
      return total
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/colors.scss";
.PostList {
  &--pagination {
    margin: 0 -1rem -1rem;
    padding: 1rem .63rem;
    
    font-size: .75em;
    
    background-color: #fff;
    background-image: linear-gradient(to right, nth($theme,4), $matte);
    position: sticky;
    bottom: -1px;

    border-top: 1px solid rgba(mix(nth($theme, 4), #888, 88%), .36);
  }
}
</style>
<style lang="scss">
@import "~@/styles/colors.scss";
@import "~@/styles/fonts.scss";
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
    line-height: 1.1;
    border: 1px solid #DDD;
    background: nth($theme,4);
    font-family: $font-mono;
    font-weight: 700;
  }
}
</style>
