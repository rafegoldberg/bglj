<template>
  <div class="Post">
    <PostHead :title="title.rendered" class="Post--title"></PostHead>
    <article v-html="content.rendered"></article>
  </div>
</template>

<script>
import PostHead from './PostHead';
export default {
  name:"Post",
  components:{ PostHead },
  props:{
    title:{
      type:[ String, Object ],
      default: "Post Title"
    },
    content:{
      type:[ String, Object ],
      default: "<p>Lorem ipsum dolor.</p>"
    }
  },
  metas(){
    return {
      title: this.title.rendered || this.title
    }
  },
}
</script>


<style lang="scss" scoped>
.Post {
  align-self: baseline;
  margin: 0 auto;
}
</style>
