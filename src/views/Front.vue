<template>
<div class="AppFront">
  
  <hr>
  <Brand tag="h1" :large="true" :fluid="true"></Brand>
  <hr>
  
  
  <template v-if="!context.loading">
    <article v-html="context.acf.mandate"></article>
    <br>
    <Social></Social>
  </template>
  <span v-else>Loading...</span>
  
</div>
</template>

<script>
import VpItem from '@/VuePress/item'
import Brand from '@/components/brand'
import Social from '@/components/SocialBar'

export default {
  extends: VpItem,
  components:{ Brand, Social },
  props:{
    type:{ default:'page' }
  },
  methods: {
    fetch(WP){
      return WP.namespace('bglj/v0').frontpage()
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks.scss";
@import "~@/styles/theme/fonts.scss";
@import "~@/styles/theme/colors.scss";

.AppFront {
  header {
    h1 {
      margin: 0;
      font-family: $font-serif;
      font-size: 4em;
      letter-spacing: -0.01em;
      line-height: .88;

      text-indent: .33rem;
      text-indent: -.25rem;
    }
    span {
      display: inline-block;
      margin-left: .5rem;
      font-family: $font-slab;
      line-height: 3.5;
    }
    @include breakpoint( nth($breaks,-1) ){
      text-align: center;
      h1 { font-size: 3em }
      span { line-height: 3; }
    }
  }
  hr {
    margin: 2rem 0 1.5rem 0;
    opacity: 0;
  }
}
</style>
