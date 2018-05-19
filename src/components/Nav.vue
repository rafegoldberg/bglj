<template>
<nav class="AppNav">
  
  <router-link tag="h1" :to="'/home'" :class="{
      out: $route.name=='home'
      }">
    <a>The Berkley Journal of Gender, Law &amp; Justice</a>
  </router-link>
  <!-- <hr> -->

  <ul v-if="!context.loading" style="display:block; padding: 0 0 0 1em; line-height: 2.6; ">
    <router-link tag="li" v-for="page in context.acf.menu" :key="page.id" :to="makeLink(page)">
      <a>{{page.label}}</a>
    </router-link>
  </ul>
    
  <slot></slot>

</nav>
</template>

<script>
import WpAsync from "./WpAsync";
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
      if( navItem.acf_fc_layout=='page' )
        return `/p/${slug}`
      else
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
.AppNav {
  & {
    position: sticky;
    top: 0;
  }
  h1 {
    // font-style: italic;
    line-height: 1.1;
    font-weight: 100 !important;
    transition: opacity .2s .1s ease-out;
    &.out {
      opacity: 0;
      pointer-events: none;
    }
  }
  .open {
    font-weight: bold;
  }
}
</style>
