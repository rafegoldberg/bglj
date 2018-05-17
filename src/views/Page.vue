<template>
  <div v-if="context.loading">Loading...</div>
  <div v-else-if="Array.isArray(context)" class="page">
    <router-link v-for="subpage in context" :to="`/volumes/${subpage.slug}`" :key="subpage.id" tag=h3>
      <a>{{subpage.title.rendered}}</a>
    </router-link>
  </div>
  <div v-else>
    <header>
      <h2 style="margin-bottom:0;font-weight:bold"><code>{{context.title.rendered}}</code></h2>
      <small>
        Published <time>{{context.acf.pubdate}}</time>.
        <a :href="context.acf.link"><u>View archive.</u></a>
      </small>
    </header>
    <hr>
    <p v-html="context.acf.note"></p>
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
      end  = this.endpoint || this.$route.params.endpoint,
      slug = this.slug || this.$route.params.slug
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