<template>
  <div id="app">
    <Layout>
      <WpNav slot=side></WpNav>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import WpNav from '@/components/nav.vue'
import Layout from '@/components/layout.vue'
export default {
  name: "App",
  components:{ WpNav, Layout }
}
</script>

<style>
hr {
  border-style: solid;
  border-width: .75px 0 0;
  border-color: #dddddd;
}
</style>
