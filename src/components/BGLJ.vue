<template>
<div class="BrandBGLJ">
  <small class="BrandBGLJ--ln1">The Berkley Journal of</small>
  <component :is="tag" class="BrandBGLJ--ln2">Gender, Law <span>&amp;</span> Justice</component>
</div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'wrapper-component',
  props:{
    tag: {
      type: String,
      required: true,
    }
  }
}
</script>


<style lang="scss">
@import "~@/styles/theme/colors.scss";
@import "~@/styles/theme/fonts.scss";
.BrandBGLJ {
  z-index: 1;
  margin: .7rem 0;
  color: currentColor !important;
  font-size: 100%;
  &--ln1 {
    display: block;
    margin: 0 0 .5em;
    font-weight: 100 ;
    font-family: $font-slab;
    font-size: .66em;
    text-transform: uppercase;
    letter-spacing: .05em;
  }
  &--ln2 {
    margin: unset;
    font-family: $font-serif;
    line-height: .93;
    > span { font-style: italic }
  }
}
</style>
