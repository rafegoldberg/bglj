<template>
  <div class="AppFront">
    <small>the Berkley Journal of</small>
    <h1>Gender, Law <em>&amp;</em> Justice</h1>
    <template v-if="context.mandate">
      <hr>
      <article v-html="context.mandate"></article>
    </template>
  </div>
</template>

<script>
import WpAsync from '@/components/WpAsync'
export default {
  name: 'AppFront',
  extends: WpAsync,
  methods:{
    fetch(WP){
      return WP.namespace('acf/v3').options().id('options').get().then(item=> item.acf || item )
    }
  },
  computed:{}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/colors.scss";

.AppFront {
  color: nth($purples,2);
  color: #1f327b;
  h1 {
    margin: 0;
    font-family: $font-serif;
    font-size: 4em;
    letter-spacing: -0.01em;
    line-height: .8;
    text-indent: .33rem;
  }
  hr {
    margin: 2rem 0 1.5rem 0;
  }
  small {
    display: inline-block;
    margin-left: 0.5rem;
    font-family: $font-slab;
    text-transform: uppercase;
    line-height: 4;
    letter-spacing: 2px;
  }
}
</style>
