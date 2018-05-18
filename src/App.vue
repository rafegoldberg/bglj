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
import AppLayout from '@/components/AppLayout.vue'
import AppNav from "@/components/Nav.vue";

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
  box-sizing: border-box;
  overflow: scroll;
  max-width: 30em;
  padding: 0.75rem;
  border: 1px solid #dadada;
  border-radius: 3px;
  max-height: 20vw;
  background: #fafafa;

  white-space: pre;
}
h1, h2, h3, h4, h5, h6 {
  font-family: $font-slab;
  font-weight: 100;
}
p {
  max-width: 33em;
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