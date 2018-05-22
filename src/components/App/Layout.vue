<template>
<div class="AppLayout">


  <div class="AppLayout--side">
    <slot name="side"></slot>
  </div>

  <main class="AppLayout--main">
    <div class="TopNav"  :class="{ TopNav_hid:this.$route.name=='home' }">
      <router-link tag="h4" to="/" class="Brand">
        <small class="Brand--ln1">The Berkley Journal of</small>
        <div class="Brand--ln2">Gender, Law <span>&amp;</span> Justice</div>
      </router-link>
      <router-link tag=button to="/nav" class="TopNav--toggle"></router-link>
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

<style lang="scss">
@import "~@/styles/fonts.scss";
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
@import "~@/styles/breaks.scss";
@import "~@/styles/colors.scss";
@import "~@/styles/fonts.scss";
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
      background-image: url('~@/assets/logo.png');
      background-repeat: no-repeat;
      background-size: auto 24vw;
      background-position: top 1.5rem right -9vw;
      background-position: center right -9vw;
      opacity: .05;

      pointer-events: none;
    }

    background: #f1f1ee;
    background: lighten(mix(#f1f1ee,#f0e9ec,88%),2%);
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
      @debug nth($theme,3);
      background: linear-gradient(
        to right,
        rgba(white,0),
        mix(nth($theme,2),#FFF,10%)
        );
      color: rgba(nth($theme,3),.5);

      text-align: right;
      font-family: $font-serif;
    }
  }
}
</style>
<style lang="scss">
@import "~@/styles/breaks.scss";
@import "~@/styles/colors.scss";
.TopNav {
  & {
    $BG: nth($theme,4);
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

      background-image: url('~@/assets/logo.png');      
      background-repeat: no-repeat;
      background-size: 4.2rem auto;
      background-position: left -1.5rem top .3rem;
      
      opacity: 0;
      filter: saturate(.5);
    }
    &:before, .Brand {
      transition: .25s .05s ease-out;
    }
    &_hid:before { opacity: .25 }
    &_hid .Brand { opacity: 0   }
  }
  &--toggle {
    appearance: none;

    height: 2em;
    width: 2em;
    margin: 1.5em 0 1.5em auto;

    background-color: transparent;
    background-image: url(
      https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png
      );
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border: none;
  }
  @include breakpoint( min-width $break ){
    display: none !important;
  }
}
</style>
<style lang="scss">
@import "~@/styles/colors.scss";
@import "~@/styles/fonts.scss";
.Brand {
  z-index: 1;
  margin: 0;
  &--ln1 {
    font-size: .63em;
    // text-transform: uppercase;
    // letter-spacing: .05em;
  }
  &--ln2 {
    font-family: $font-serif;
    > span { font-style: italic }
  }
}
</style>
