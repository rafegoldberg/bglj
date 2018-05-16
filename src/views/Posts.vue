<template>
  <div class="Posts">
    
    <div class="Posts--lists">
      <header class="Posts--header">
        <h2>Online Edition</h2>
      </header>
      <ul class="Posts--nav" v-if="!context.loading">
        <router-link :to="`/posts/${post.slug}`" v-for="post in context" :key="post.id" tag=li>
          <a>{{post.title.rendered}}</a>
        </router-link>
      </ul>
    </div>
    
    <router-view class="Posts--item"></router-view>

  </div>
</template>

<script>
import WpAsync from "@/components/wp/api";
import WpPost from "@/components/post"

export default {
  name: 'Posts',
  extends: WpAsync,
  components:{ WpPost },
  methods:{
    fetch(WP){
      return WP.posts().get()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/colors.scss";

.Posts {
  & {
    display: flex;
    align-items: center;
    color: nth($purples,2);
  }
  .WpPost {
    align-self: baseline;
    margin: 1em 1em 1em auto;
    padding: 1em;
    box-shadow: .5em -.5em 1em -.5em rgba(0,0,0,.2);
    text-transform: capitalize;
    &:after {
      content: " Post";
      font-weight: 200;
    }
  }
  }
</style>
