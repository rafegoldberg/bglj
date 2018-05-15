<template>
  <div id="app">
    <div>
      <h1 class=title>
        <router-link :to="'/home'">BGL<span>&</span>J</router-link>
      </h1>
      <hr>
      <nav>
        <router-link :to="'/online'">Page</router-link>
        <router-link :to="'/submit/catherine-albiston-prize'">Subpage</router-link>
      </nav>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import WpApi from '@/components/wp/api.vue'

export default {
  name: "App",
}
</script>

<style lang="scss">
@import '~@/styles/fonts.scss';
html, body {
  margin: 0;
  padding: 0;
  line-height: 1.3;
  font-family: $font-sans;
}
hr {
  border-style: solid;
  border-width: .8px 0 0;
  // border-color: magenta;
}
pre, code {
  font-family: $font-mono;
}
pre {
  margin: unset;
  white-space: pre;
  overflow-x: scroll;
}
h1, h2, h3, h4, h5, h6 {
  font-family: $font-slab;
  font-weight: 100;
}
</style>

<style lang="scss" scoped>
#app {
  & {
    display: flex;
    flex-flow: nowrap row;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    overflow: hidden;
    // background: magenta;
  }
  > * {
    max-height: 100vh;
    overflow-y: scroll;
    padding: 1rem;
    box-sizing: border-box;
  }
  >:last-child:not(:only-child) {
    flex: 0 70%;
    // background: yellow;
    :first-child { margin-top:    0 !important }
    :last-child  { margin-bottom: 0 !important }
  }
  >:first-child {
    flex: 0 30%;
    // background: cyan;
    text-align: center;
  }
}
</style>

<style lang="scss">
.fade{
  &-enter-active,
  &-leave-active {
    transition: opacity .3s ease-out;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>

<style lang="scss">
.title {
  a {
    text-decoration: none;
    color: initial;
  }
  &, & > * {
    position: relative;
  }
  span {
    font-family: hoefler text;
    font-weight: normal;
    font-style: italic;
    position: absolute;
    margin: -1.5rem -.3em 0;
    font-size: 3em;
    opacity: .2;
    line-height: 1;
  }
}
</style>
