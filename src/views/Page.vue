<template>
  <div v-if="!context.loading" class="page">

    <h2 v-html="context.title.rendered"></h2>

    <article v-html="context.content.rendered">
      <b>hi what happens?</b>
    </article>

    <Posts v-if="$route.params.slug=='online'"></Posts>
    <!-- TODO: ^this is bad news bears... -->

  </div>
</template>

<script>
import WpAsync from '../components/wp-async.vue';
import Posts from './Posts';

export default {
  name:"Page",
  extends: WpAsync,
  components:{ Posts },
  methods:{
    fetch(WP){
      let slug = this.$route.params.slug
      return WP.pages().slug(slug).get()
    },
  },
}
</script>
