<template>
<nav>
  
  <h1>
    <router-link :to="'/home'">BGLJ</router-link>
  </h1>

  <hr>

  <template v-if="!context.loading">
    <router-link tag="li" v-for="page in context.acf.menu" :key="page.id" :to="`/${page.feed}`">
      <a>{{page.label}}</a>
    </router-link>
  </template>
    
  <slot></slot>

</nav>
</template>

<script>
import WpAsync from "./wp/api";
export default {
  extends: WpAsync,
  methods:{
    fetch(API){
      return API.namespace('acf/v3').options().id('sidebar').get()
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  font-weight: bold;
}
</style>
