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
  }
}
</script>


<style lang="scss" scoped>
.Post {
  align-self: baseline;
  margin-left: 1em;
  &--title {
    position: relative;
    &:before {
      position: absolute;
      right: 100%;
      font-size: 1.5em;
      font-weight: 100;
      content: "/";
      margin: 0 0.25em;
    }
  }
}
</style>
