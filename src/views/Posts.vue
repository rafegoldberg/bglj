<template>
  <div class="Posts">
    
    <div class="Posts--lists">
      <ul class="Posts--nav" v-if="!context.loading">
        <router-link v-for="post in context"
          :to="`/posts/${post.slug}`"
          :key="post.id"
          
          tag="li">
            <h3><a>{{post.title.rendered}}</a></h3>
        </router-link>
      </ul>
    </div>
    
    <router-view class="Posts--item" v-bind="currentPost"></router-view>

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
  },
  metas: {
    title: 'Posts'
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/fonts.scss";
@import "~@/styles/theme/colors.scss";

.Posts {
  display: flex;
  align-content: center;
  align-items: baseline;
  justify-content: space-between;
  ul {
    margin-right: 1.5rem;
    padding-left: 1em;
  }
  }
</style>
