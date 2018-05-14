<template>
  <div id="app">
    <AppLayout>
      <AppNav></AppNav>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/app.vue'
import AppNav from '@/components/nav.vue'
export default {
  name: "App",
  components:{ AppLayout, AppNav }
}
</script>

<style>
hr {
  border-style: solid;
  border-width: .75px 0 0;
  border-color: #dddddd;
}
</style>
