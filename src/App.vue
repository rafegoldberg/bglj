<template>
<AppLayout id="App">
  
  <AppNav slot="side">

    <!-- <router-link tag="h1" :to="'/home'" :class="{
        out: $route.name=='home',
        'AppNav--title': true,
      }">
      <a>The Berkley Journal of Gender, Law &amp; Justice</a> -->
    <router-link :to="'/home'" :class="{
        out: $route.name=='home',
        'AppNav--title': true,
      }">
      <Brand tag="h1"></Brand>
    </router-link>

    <div slot="after">
      <transition
          enter-active-class="fadeInUp"
          leave-active-class="fadeOutDown">
        <router-view name="nav"></router-view>
      </transition>
    </div>
  </AppNav>
  
  <transition
      name="fade"
      mode="out-in">
    <router-view></router-view>
  </transition>
  
  <small slot="foot" style="font-size:.75em">
    ©{{new Date(Date.now()).getFullYear()}} — <em>the Berkley Journal of Gender, Law & Justice</em>
  </small>
  
</AppLayout>
</template>

<script>
import AppLayout from '@/components/App/Layout'
import AppNav from '@/components/App/Nav'
import Brand from '@/components/brand'

export default {
  name: "App",
  components:{ AppLayout, AppNav, Brand },
  metas(){ return {
    title: "Home",
    titleTemplate: '%s  //  BGLJ',
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
@import "~vue2-animate/src/sass/vue2-animate.scss";
</style>