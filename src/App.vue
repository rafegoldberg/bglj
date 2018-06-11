<template>
<AppLayout id="App">
  
  <AppNav slot="side">
    <router-link tag="h1" :to="'/home'" :class="{
        out: $route.name=='home',
        'AppNav--title': true,
      }">
      <a>The Berkley Journal of Gender, Law &amp; Justice</a>
    </router-link>
    <div slot="after">
      <router-view name="nav"></router-view>
    </div>
  </AppNav>
  
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  
  <small slot="foot" style="font-size:.75em">
    ©{{new Date(Date.now()).getFullYear()}} — <em>the Berkley Journal of Gender, Law & Justice</em>
  </small>
  
</AppLayout>
</template>

<script>
import AppLayout from '@/components/App/Layout.vue'
import AppNav from "@/components/App/Nav.vue"

export default {
  name: "App",
  components:{ AppLayout, AppNav },
  metas(){ return {
    title: "Home",
    titleTemplate: '%s  /  BGLJ',
    bodyAttrs: {},
    htmlAttrs: {},
    base: {},
    meta: [
      { name: 'og:title',
        content: 'Page title.',
        vmid: 'ogTitle',
        },
      { name: 'description',
        content: 'A brief descriptive excerpt.',
        vmid: 'ogDescription',
        },
      { name: 'og:description',
        content: 'A brief descriptive excerpt.',
        vmid: 'ogDescription',
        },
      { name: 'twitter:card',
        content: 'A brief descriptive excerpt.',
        vmid: 'ogDescription',
        },
      { name: 'og:type',
        content: 'article',
        vmid: 'ogType',
        },
      { name: 'og:url',
        content: 'http://canonical.wp/link/to-page',
        vmid: 'ogUrl',
        },
      { name: 'og:image',
        content: 'http://link.to/featured.img',
        vmid: 'ogImage',
        },
    ],
    link: [],
    style: [],
    script: [],
    noscript: [],
  } },
}
</script>

<style lang="scss">
@import "~@/styles/doc.scss";

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .3s ease-out;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

</style>