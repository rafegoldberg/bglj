<template>
  <div v-if="!context.loading && !context.error" class="PostItem">
    <h2 v-html="context.title.rendered"></h2>
    <hr>
    <Social :url="context.link" inline-template>
      <div>

        <!-- Facebook -->
        <network network="facebook">
          <i class="fa fa-fw fa-facebook"></i> 
        </network>

        <!-- Google+ -->
        <network network="googleplus">
          <i class="fa fa-fw fa-google-plus"></i> 
        </network>

        <!-- Reddit -->
        <network network="reddit">
          <i class="fa fa-fw fa-reddit"></i> 
        </network>

        <!-- Twitter -->
        <network network="twitter">
          <i class="fa fa-fw fa-twitter"></i> 
        </network>

      </div>
    </Social>
    <hr>
    <article v-html="context.content.rendered"></article>
  </div>
</template>

<script>
import Social from 'vue-social-sharing'
import VpItem from '@/VuePress/item'

export default {
  name:'PostItem',
  extends: VpItem,
  metas: {
    title: "Posts"
  },
  methods: {
    fetch(WP){
      let post = this.$route.params.post
      return this.endpoint.slug(post)
    }
  },
  computed: {
    href:gives=> window.location.href,
  },
  components:{ Social },
}
</script>

<style lang="scss">
.PostItem {
  .alignleft {
    float: left;
    margin: .1em 1rem .2em 0;
  }
  .alignright {
    float: right;
    margin: .1em 0 .2em 1rem;
  }
  .aligncenter {
    margin: 0 auto;
    display: block;
  }
  .wp-caption {
    &[width], &[style] { width: auto !important }
    &-text {
      margin: .36em 0 0;
      font-size: .88em;
    }
  }
}
</style>
