<template>
<div class="PageLayout">

  <div class="PageLayout--side">
    <slot name="side"></slot>
  </div>

  <div class="PageLayout--main">
      <slot name="main"></slot>
      <slot>Loading...</slot>
  </div>

</div>
</template>

<style lang="scss">
@import "~@/styles/fonts.scss";
html, body {
  padding: 0;
  margin: 0;
  font-family: $font-sans;
}
</style>

<style lang="scss" scoped>
.PageLayout{
  & {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
    border-color: #CCC;
  }
  * {
    border-color: inherit !important;
  }
  > * {
    padding: 0 1rem;
  }
  &--side {
    flex: 0 25vw;
    // background: #F8F8F8;
    border-right: .75px solid;
  }
  &--main {
    flex: 1 100%
  }
}
</style>