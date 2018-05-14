<template>
  <div v-if="!context.loading" class="posts">
    <h2 v-if="$route.params.slug!=='online-edition'">Posts</h2>
    <hr>
    <div v-for="post in context">
      <li v-html="post.title.rendered"></li>
    </div>
  </div>
</template>

<script>
import wpAsyncVue from '../components/wp-async.vue';
export default {
  name:"Posts",
  extends: wpAsyncVue,
  methods:{
    fetch(WP){
      return WP.posts().get()
    }
  }
}
</script>
