<template>
  <div id="app">
    <AppLayout>
      <WpNav slot=side></WpNav>
      <router-view></router-view>
    </AppLayout>
  </div>
</template>

<script>
import WpNav from '@/components/nav.vue'
import AppLayout from '@/layouts/app.vue'
export default {
  name: "App",
  components:{ WpNav, AppLayout }
}
</script>

<style>
hr {
  border-style: solid;
  border-width: .75px 0 0;
  border-color: #dddddd;
}
</style>
