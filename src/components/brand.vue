<template>
<component :is="tag" class="BrandBGLJ" :class="{
    'BrandBGLJ_large': large,
    'BrandBGLJ_fluid': fluid,
    }">
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
    },
    large: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },
}
</script>


<style lang="scss">

@import '~@/styles/theme/fonts';
@import '~@/styles/theme/colors';
@import '~@/styles/theme/breaks';

@import '~@/styles/mixin/fluidType';

.BrandBGLJ {

  $root: #{&};
  
  & { // self
    z-index: 1;
    margin: 0;
    color: currentColor !important;
  }

  &--ln {
    &1 {
      display: block;
      margin: 0 0 .25em;
      font-size: .66em;
      font-size: .42em;
      font-weight: 100 ;
      font-family: $font-slab;
      text-transform: uppercase;
      letter-spacing: .15em;
    }
    &2 {
      margin: unset;
      font-size: .93em;
      font-family: $font-serif;
      line-height: 1;
      > span { font-style: italic }
    }
  }

  &_large {
    font-size: 3em;
    #{$root}--ln1 {
      text-transform: unset;
      letter-spacing: 0;
    }
  }
  &_fluid {
    @include fluidType( $scale:1.6em );
  }

  @include breakpoint( max-width 36rem ){
    &_large {
      text-align: center;
      font-size: 2.2em
    }
  }

}

</style>
