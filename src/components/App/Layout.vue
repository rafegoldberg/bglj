<template>
<div class="AppLayout">

  <div class="AppLayout--side">
    <slot name="side"></slot>
  </div>

  <main class="AppLayout--main">

    <div class="TopNav"  :class="{ TopNav_hid:this.$route.name=='home' }">
      
      <router-link to="/" class="Brand">
        <Brand tag="h5"></Brand>
      </router-link>

      <button v-if="$route.name=='nav'" @click.prevent="$router.go(-1)" class="TopNav--toggle TopNav--toggle-close">
        </button>
      <router-link v-else tag=button to="/nav" class="TopNav--toggle TopNav--toggle-open">
        </router-link>

    </div>

    <header class="AppLayout--main-head">
      <slot name="head"></slot>
    </header>

    <div class="AppLayout--main-page">
      <slot>Loading...</slot>
    </div>

    <footer class="AppLayout--main-foot">
      <slot name="foot"></slot>
    </footer>
  </main>

</div>
</template>

<script>
import Brand from '../brand'

export default {
  components:{ Brand }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/sizes";
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
@import "~@/styles/theme/fonts";
@import "~@/styles/mixin/wp.adminbar";


$app-adminbar-height: calc(100vh - #{$wp-adminbar-height});
$sidebar-min-width: 18rem;

.AppLayout{
  $bgc: $theme;
  $txt: $matte;
  & {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
    @include AdminBar {
      min-height: $app-adminbar-height;
    }
  }
  > * {
    padding: 0 $gutter;
  }
  &--side {
    & {
      z-index: 9;
      position: sticky;
      top: 0;
      max-height: 100vh;

      flex: 0 20vw;
      min-width: $sidebar-min-width;

      display: flex;
      flex-flow: nowrap column;
      justify-content: center;
      align-items: stretch;

      background: $bgc;
      color: $txt;
    }
    &:after {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0%;
      width: 100%;
      height: 100%;
      background-image: url('~@/assets/logo.svg');
      background-repeat: no-repeat;
      background-size: auto calc(28rem - 3vw);
      background-position: bottom right calc(-(14rem - 6vw));
      filter: opacity(.2) saturate(0) invert(1);

      pointer-events: none;
    }
    @include breakpoint( nth($breaks,-1) ){
      display: none !important;
    }
  }
  &--main {
    & {
      flex: 1 80vw;
      align-self: center;
      display: flex;
      box-sizing: border-box;
      flex-flow: nowrap column;
      max-width: 80vw;
      min-height: 100vh;
      max-height: 100%;
      @include breakpoint( min-width nth($points,-1) ){
        padding-top: $gutter;
      }
      @include breakpoint( nth($breaks,-1) ){
        max-width: 100vw;
      }
      @include AdminBar {
        min-height: $app-adminbar-height;
      }
    }
    &-head {}
    &-page {
      margin: auto 0;
    }
    &-foot {
      box-sizing: border-box;
      margin: $gutter -#{$gutter} 0;
      padding: $gutter;
      min-height: 2rem;
      background: $edge;
      color: $theme;

      text-align: right;
      font-family: $font-serif;
      line-height: .9;
    }
  }
}
</style>
<style lang="scss">
@import "~@/styles/theme/sizes";
@import "~@/styles/theme/breaks";
@import "~@/styles/theme/colors";
.TopNav {

  $bgc: $theme;
  $txt: $matte;

  & {
    z-index: 10;
    position: sticky;
    top: -1px;
    display: flex;
    align-items: center;
    margin: 0 -#{$gutter} $gutter;
    padding: .25rem $gutter;

    color: $txt;
    background-color: rgba($bgc,.63);
    background-image: linear-gradient( to bottom, $bgc, rgba($bgc, .9));
    border-bottom: 1px solid rgba(mix($bgc, #888, 88%), .93);    
    box-shadow: 0 6px 24px -8px rgba(#333, .1);
    
    &:before {
      
      content: " ";
      pointer-events: none;
      
      z-index: -1;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background-image: url('~@/assets/logo.svg');      
      background-repeat: no-repeat;
      background-size: auto 70%;
      background-position: left .25rem center;
      
      filter: opacity(.3) saturate(0) invert(1);
    }
    &:before,
    .Brand {
      transition: .25s .05s ease-out;
    }
    &_hid:before { 
      filter: opacity(.5) saturate(0) invert(1);      
    }
    &_hid .Brand { opacity: 0 }
  }
  &--toggle {
    appearance: none;

    height: 2em;
    width: 2em;
    margin: 1.5em 0 1.5em auto;

    color: #ffffff;
    font-weight: bold;

    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: none;
    &-open {
      background-image: url(
        "~@/assets/nav.svg"
      );
    }
    &-close {
      background-image: url(
        "~@/assets/close.svg"
      );
    }
  }
  @include breakpoint( min-width nth($points,-1) ){
    display: none !important;
  }
}
</style>