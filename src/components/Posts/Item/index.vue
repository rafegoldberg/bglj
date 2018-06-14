<template>
<div v-if="!context.loading && !context.error" class="PostItem">
  
  <h2 class="PostItem--title" v-html="context.title.rendered"></h2>

  <SocialBar :url="context.link"></SocialBar>

  <article class="PostItem--content" v-html="context.content.rendered"></article>
  
</div>
</template>

<script>
import SocialBar from '@/components/SocialBar'
import VpItem from '@/VuePress/item'

export default {
  name:'PostItem',
  extends: VpItem,
  metas(){
    return {
      title: !this.context.loading ? this.context.title.rendered : ''
    }
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
  components:{ SocialBar },
}
</script>

<style lang="scss">

@import "~@/styles/theme/colors";

.PostItem {
  &{
    min-height: 100vh;
    padding-top: calc(4em + 8vh);
    margin: -1rem -1rem 0;
    padding-left: 1rem;
    background-image: linear-gradient(to bottom, rgb(177, 196, 223) -6em, $matte 8em);
  }
  &--title {
    font-size: 2.5em;
    font-size: calc(1.3em + 3vmin);
  }
  &--content {
    margin-right: 1rem;
  }

  .align {
    &left {
      float: left;
      margin: .1em 1rem .2em 0;
    }
    &right {
      float: right;
      margin: .1em 0 .2em 1rem;
    }
    &center {
      margin: 0 auto;
      display: block;
    }
  }
  .wp {
    &-caption {
      &[width], &[style] { width: auto !important }
      &-text {
        margin: .36em 0 0;
        font-size: .88em;
      }
    }
  }
}
</style>
