<template>
<div class="PostList">
  
  <div v-if="!context.loading && !context.error">
  <slot name="item" v-for="item in context">
    <MediaBox v-bind="item"
        :slug="`/${type}/${item.slug}`"
        :card="item.acf && item.acf.metacard || {}">
      <router-link tag=button :to="`/${type}/${item.slug}`">
        {{item.acf && item.acf.metacard && item.acf.metacard.ctaText || 'More...'}}
      </router-link>
    </MediaBox>
  </slot>
  </div>
  
  <div class="PostList--pagination" v-if="pages>1">
    <router-link append :to="{query:{ page:this.next() }}">
      ⇠Next
    </router-link>
    <router-link append :to="{query:{ page:1 }}" style="opacity:.75">
      First
    </router-link>
    <router-link append :to="{query:{ page: this.pages }}" style="opacity:.75">
      Last
    </router-link>
    <router-link append :to="{query:{ page:this.prev() }}">
      <b>Prior⇢</b>
    </router-link>
  </div>
  
</div>
</template>

<script>
import VpList from '@/VuePress/list';

export default {
  name:'PostList',
  extends: VpList,
  props:{
    per:{
      type:[ String, Number ],
      default: 2,
    }
  },
  metas(){
    return {
      title: this.type
        ? this.type.charAt(0).toUpperCase() + this.type.slice(1).toLowerCase()
        : 'Posts'
    }
  },
  methods:{
    fetch(WP){
      let page = this.$route.query.page
      return this.endpoint.perPage(this.per).page( page || 1 )
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

@import "~@/styles/theme/sizes";
@import "~@/styles/theme/colors";

.PostList {
  &--pagination {
    position: sticky;
    bottom: -1px;

    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;

    margin: 0 -$gutter -$gutter 0;
    // padding: $gutter .63rem;
    font-size: .75em;
    
    background-color: $matte;
    color: $theme;
    border-style: solid;
    border-color: $edge transparent;
    border-width: 1px 0;
    // background-image: linear-gradient(to right, nth($theme-list,4), $matte);

    // color: #fff;
    // background: mix(white,nth($theme-list,3),63);
    // border-top: none;
    a {
      display: inline-block;
      min-width: 6em;
      padding: 1.3em .9em;
      text-align: center;
      transition: background .25s ease-out;
      &:hover {
        background-color: mix($matte,$edge,75%);
      }
      + a {
        border-left: 1px solid $edge;
      }
    }
  }
}

</style>