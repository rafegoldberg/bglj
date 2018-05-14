<template>
  <div class="PageLayout">
    <div class="PageLayout--side">
      <slot name="side"></slot>
    </div>
    <div class="PageLayout--main">
      <transition name="fade" mode="out-in">
        <slot name="main"></slot>
        <slot></slot>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@/styles/fonts.scss";
html, body {
  padding: 0;
  margin: 0;
  font-family: $font-serif;
}
</style>
<style lang="scss" scoped>
.PageLayout{
  & {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
  }
  > * {
    padding: 0 1rem;
  }
  &--side {
    flex: 0 25vw;
    // background: #F8F8F8;
    border-right: .75px solid #000;
  }
  &--main {
    flex: 1 100%
  }
}
</style>
<style lang="scss">
.fade{
  &-enter-active,
  &-leave-active {
    transition: opacity .3s .15s ease-in-out;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>