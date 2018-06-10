<template>
<div class="AppLayout">

  <div class="AppLayout--side">
    <slot name="side"></slot>
  </div>

  <main class="AppLayout--main">

    <div class="TopNav"  :class="{ TopNav_hid:this.$route.name=='home' }">
      
      <router-link to="/" class="Brand">
        <BgljHead tag="h5"></BgljHead>
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
import BgljHead from '../BGLJ'
export default {
  components:{ BgljHead }
}
</script>


<style lang="scss">
@import "~@/styles/theme/fonts.scss";
html, body {
  padding: 0;
  margin: 0;
  font-family: $font-sans;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
@import "~@/styles/theme/breaks.scss";
@import "~@/styles/theme/colors.scss";
@import "~@/styles/theme/fonts.scss";
@import "~@/styles/mixin/wp.adminbar.scss";

$app-adminbar-height: calc(100vh - #{$wp-adminbar-height});

.AppLayout{
  & {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
    @include AdminBar {
      min-height: $app-adminbar-height;
    }
  }
  > * {
    padding: 0 1rem;
  }
  &--side {
    flex: 0 20vw;
    min-width: 20vw;

    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: stretch;

    &:after {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0%;
      width: 100%;
      height: 100%;
      background-image: url('~@/assets/logo.svg');
      background-repeat: no-repeat;
      background-size: auto 24vw;
      background-position: top 1.5rem right -9vw;
      background-position: bottom right -9vw;
      filter: opacity(.2) saturate(0) invert(1);

      pointer-events: none;
    }

    // background: #f1f1ee;
    // background: lighten(mix(#f1f1ee,#f0e9ec,88%),2%);
    // background: rgba(nth($theme-list,3),.063);
    background: $theme;
    color: $matte;
    // border-right: 1px solid $matte;
    
    position: sticky;
    top: 0;
    max-height: 100vh;
    @include AdminBar {
      top: $wp-adminbar-height;
      max-height: $app-adminbar-height;
    }
    @include breakpoint( max-width $break ){
      display: none !important;
    }
  }
  &--main {
    & {
      overflow-x: hidden;
      overflow-y: initial;

      flex: 1 80vw;
      align-self: center;
      display: flex;
      box-sizing: border-box;
      flex-flow: nowrap column;
      max-width: 80vw;
      min-height: 100vh;
      @include breakpoint( min-width $break ){
        padding-top: 1rem;
      }
      @include breakpoint( max-width $break ){
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
      margin: 1rem -1rem 0;
      padding: 1rem;
      min-height: 2rem;
      background: $edge;
      color: $theme;

      text-align: right;
      font-family: $font-serif;
    }
  }
}
</style>
<style lang="scss">
@import "~@/styles/theme/breaks.scss";
@import "~@/styles/theme/colors.scss";
.TopNav {
  & {
    $BG: $theme;
    color: $matte;
    z-index: 10;
    position: sticky;
    top: -1px;
    display: flex;
    align-items: center;
    margin: 0 -1rem 1rem;
    padding: .5rem 1rem;
    background-color: rgba($BG,.63);
    background-image: linear-gradient( to bottom, $BG, rgba($BG, .9));
    border-bottom: 1px solid rgba(mix($BG, #888, 88%), .93);    
    box-shadow: 0 6px 24px -8px rgba(#333, .1);
    
    &:before {
      
      content: " ";
      pointer-events: none;
      
      z-index: 0;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background-image: url('~@/assets/logo.svg');      
      background-repeat: no-repeat;
      background-size: 4.2rem auto;
      background-position: left -1.5rem top .3rem;
      
      filter: opacity(.2) saturate(0) invert(1);
    }
    &:before, .Brand {
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
  @include breakpoint( min-width $break ){
    display: none !important;
  }
}
</style>