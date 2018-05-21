<template>
  <div class="AppFront">
    <header>
      <span>The Berkley Journal of</span>
      <h1>Gender, Law <em>&amp;</em> Justice</h1>
    </header>
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
@import "~@/styles/breaks.scss";
@import "~@/styles/fonts.scss";
@import "~@/styles/colors.scss";

.AppFront {
  header {
    color: nth($theme,3);
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
    @include breakpoint( max-width $break ){
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
