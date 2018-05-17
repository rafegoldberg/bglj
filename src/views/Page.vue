<template>
  <div v-if="!context.loading" class="page">
    <router-link v-for="subpage in context" :to="`/volumes/${subpage.slug}`" :key="subpage.id" tag=h3>
      <a>{{subpage.title.rendered}}</a>
    </router-link>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import WpAsync from '../components/wp/api.vue';

export default {
  name:"Page",
  extends: WpAsync,
  methods:{
    fetch(WP){
      let
      end  = this.$route.params.endpoint,
      slug = this.$route.params.slug
      return WP[end]().slug(slug).get()
    },
  },
}
</script>

<style lang="scss" scoped>
pre {
  max-width: 70vw;
  overflow: auto;
  overflow-y: scroll;
  white-space: pre;
}
</style>