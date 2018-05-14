<template>
  <div v-if="page" class="page">
    <h2 v-html="page.title.rendered"></h2>
    <article v-html="page.content.rendered">
    </article>
  </div>
</template>

<script>
import wpAsyncVue from '../components/wp-async.vue';

export default {
  name:"Page",
  extends: wpAsyncVue,
  methods:{
    fetch(WP){
      let slug = this.$route.params.slug
      return WP.pages().slug(slug).get()
    },
  },
}
</script>
