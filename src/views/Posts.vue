<template>
  <div class="Posts">
    
    <div class="Posts--lists">
      <header class="Posts--header">
        <h2>Online Edition</h2>
      </header>
      <ul class="Posts--nav" v-if="!context.loading">
        <router-link v-for="post in context"
          :to="`/posts/${post.slug}`"
          :key="post.id"
          
          tag="li">
            <a>{{post.title.rendered}}</a>
        </router-link>
      </ul>
    </div>
    
    <router-view class="Posts--item" v-bind="currentPost"></router-view>
    {{$log(currentPost)}}

  </div>
</template>

<script>
import WpAsync from "@/components/WpAsync";
import Post from "@/components/Post"

export default {
  name: 'Posts',
  extends: WpAsync,
  components:{ Post },
  methods:{
    fetch(WP){
      return WP.posts().get()
    }
  },
  computed:{
    currentPost(){
      let
      slug = this.$route.params.slug
      if( Array.isArray(this.context) )
      return this.context.find(obj=> obj.slug==slug )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/colors.scss";

.Posts {
  display: flex;
  align-content: center;
  align-items: baseline;
  }
</style>
