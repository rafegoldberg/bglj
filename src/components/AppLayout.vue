<template>
<div class="AppLayout">

  <div class="AppLayout--side">
    <slot name="side"></slot>
  </div>

  <main class="AppLayout--main">
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

    background: nth($purples,3);
    color: nth($purples,1);

    position: sticky;
    top: 0;
    max-height: 100vh;
    @include AdminBar {
      top: $wp-adminbar-height;
      max-height: $app-adminbar-height;
    }
    >:only-child {      
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
      background: mix(nth($purples,2),#FFF,20%);
      color: rgba(nth($purples,3),.5);

      text-align: right;
      font-family: $font-serif;
    }
  }
}
</style>