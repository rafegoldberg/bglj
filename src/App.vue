<template>
<AppLayout id="app">
  
  <AppNav slot="side">
    <transition name="fade" mode="out-in">
      <router-view name="nav"></router-view>
    </transition>
  </AppNav>

  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  
  <small slot="foot" style="font-size:.75em">
    ©{{new Date(Date.now()).getFullYear()}} — <em>the Berkley Journal of Gender, Law & Justice</em>
  </small>
  
</AppLayout>
</template>

<script>
import AppLayout from '@/components/layout.vue'
import AppNav from "@/components/nav.vue";

export default {
  name: "App",
  components:{ AppLayout, AppNav }
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
  border-width: .9px 0 0;
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