<template>
<nav class="AppNav">
  
  <router-link tag="h1" :to="'/home'">
    <a>BGLJ</a>
  </router-link>
  <hr>

  <template v-if="!context.loading">
    <router-link tag="li" v-for="page in context.acf.menu" :key="page.id" :to="`/${page.object}`">
      <a>{{page.label}}</a>
    </router-link>
  </template>
    
  <slot></slot>

</nav>
</template>

<script>
import WpAsync from "./wp/api";
import Inflect from "inflection";

export default {
  extends: WpAsync,
  methods:{
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
  .active {
    font-weight: bold;
  }
}
</style>
