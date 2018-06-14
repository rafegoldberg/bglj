<template>
<nav class="AppNav">

  <slot></slot>
  
  <ul class="AppNav--page-list" v-if="!context.loading">
    <router-link tag="li" v-for="page in context.acf.menu" :key="page.id" :to="makeLink(page)" :replace="$route.name=='nav'">
      <a>{{page.label}}</a>
    </router-link>
  </ul>
    
  <div class="AppNav--after">
    <slot name="after"></slot>
  </div>

</nav>
</template>

<script>
import WpAsync from "@/components/WpAsync";
import Inflect from "inflection";

import url from 'url'
import path from 'path'

export default {
  extends: WpAsync,
  methods:{
    makeLink(navItem){
      let
      href = url.parse(navItem.object),
      slug = href.pathname.replace(this.$router.options.base,'')
      return `/${slug}`
    },
    fetch(API){
      return API.namespace('acf/v3').options().id('sidebar').get(function(err,rsp){
        if( err ) return console.error(err)
        rsp.acf.menu.map( link=>{
          if( link.acf_fc_layout=='feed' )
            link.object = Inflect.pluralize(link.object)
          return link
          })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

@import "~@/styles/theme/fonts";

.AppNav {
  & {
    position: sticky;
    top: 0;
  }
  &--title {
    font-size: 1.25em;
    margin-bottom: 1em;
    display: block;
    &, &* { font-weight: 100 !important }
    line-height: 1.1;
    transition: opacity .2s .1s ease-out;
    &.out {
      opacity: 0;
      pointer-events: none;
    }
  }
  &--page-list {
    display: block;
    padding: 0 0 0 1em;
    line-height: 2.6;
    font-family: $font-sans;
    .open {
      font-weight: bold;
      list-style-type: disc;
    }
  }
  &--after {
    min-height: 2.8rem;
    transition: all .5s ease-out;
    margin: 1.5rem 0 0;
  }
}

</style>
