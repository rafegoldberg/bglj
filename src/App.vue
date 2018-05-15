<template>
  <div id="app">
    <AppLayout>
      <!-- <div slot=side>
        <AppNav></AppNav>
      </div>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition> -->
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from '@/layouts/app.vue'
import AppNav from '@/components/nav.vue'
import WpApi from '@/components/wp/api.vue'

export default {
  name: "App",
  components:{ AppLayout, AppNav, WpApi }
}
</script>

<style>
hr {
  border-style: solid;
  border-width: .75px 0 0;
  border-color: #dddddd;
}
</style>
