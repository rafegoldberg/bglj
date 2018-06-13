<template>
<component :is="tag" class="BrandBGLJ">
  <small class="BrandBGLJ--ln1">The Berkley Journal of</small>
  <div class="BrandBGLJ--ln2">Gender, Law <span>&amp;</span> Justice</div>
</component>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'wrapper-component',
  props:{
    tag: {
      type: String,
      required: true,
      default: 'h1'
    }
  }
}
</script>


<style lang="scss">
@import "~@/styles/theme/colors.scss";
@import "~@/styles/theme/fonts.scss";
.BrandBGLJ {
  & { // self
    z-index: 1;
    margin: 0;
    color: currentColor !important;
  }
  &--ln1 {
    display: block;
    margin: 0 0 .25em;
    font-size: .66em;
    font-size: .42em;
    font-weight: 100 ;
    font-family: $font-slab;
    text-transform: uppercase;
    letter-spacing: .15em;
  }
  &--ln2 {
    margin: unset;
    font-size: .93em;
    font-family: $font-serif;
    line-height: 1;
    > span { font-style: italic }
  }
}
</style>
