<template>
  <div v-if="!context.loading" class="page">

    <h2 v-html="context.title.rendered"></h2>

    <article v-html="context.content.rendered">
      <!-- inject Wordpress Wysiwyg markup here -->
    </article>

  </div>
</template>

<script>
import WpAsync from '../components/wp-async.vue';

export default {
  name:"Page",
  extends: WpAsync,
  methods:{
    fetch(WP){
      let slug = this.$route.params.slug
      return WP.pages().slug(slug).get()
    },
  },
}
</script>
