<template>
<div class="AppLayout">


  <div class="AppLayout--side">
    <slot name="side"></slot>
  </div>

  <main class="AppLayout--main">
    <router-link tag=button to="/nav" class="AppLayout--navToggle"></router-link>

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
      // max-width: 80vw;
      min-height: 100vh;
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
      @debug nth($purples,3);
      background: linear-gradient(
        to right,
        transparent,
        mix(nth($purples,2),#FFF,10%)
        );
      color: rgba(nth($purples,3),.5);

      text-align: right;
      font-family: $font-serif;
    }
  }
  &--navToggle {
    background-image: url(
      https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png
      );
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 2em;
    width: 2em;
    appearance: none;
    margin: 1.5em 0 1.5em auto;
    border: none;
    @include breakpoint( min-width $break ){
      display: none !important;
    }    
  }
}
</style>