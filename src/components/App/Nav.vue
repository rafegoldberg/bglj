<template>
<nav class="AppNav">

  <slot></slot>
  
  <ul v-if="!context.loading" style="display:block; padding: 0 0 0 1em; line-height: 2.6; ">
    <router-link tag="li" v-for="page in context.acf.menu" :key="page.id" :to="makeLink(page)" :replace="$route.name=='nav'">
      <a>{{page.label}}</a>
    </router-link>
  </ul>
    
  <slot name="after"></slot>

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
      // if( navItem.acf_fc_layout=='page' )
      //   return `/p/${slug}`
      // else
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
  &--title {
    font-size: 1.25em;
    &, &* { font-weight: 100 !important }
    line-height: 1.1;
    transition: opacity .2s .1s ease-out;
    &.out {
      opacity: 0;
      pointer-events: none;
    }
  }
  .open {
    font-weight: bold;
    list-style-type: disc;
  }
}
</style>
