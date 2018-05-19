<template>
<AppLayout id="App">
  
  <AppNav slot="side">
    <router-link tag="h1" :to="'/home'" :class="{
        out: $route.name=='home'
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

<style lang="scss" for="document">
@import '~@/styles/fonts.scss';
html, body {
  margin: 0;
  padding: 0;
  line-height: 1.3;
  font-family: $font-sans;
  background-color: #fbfbf6;
}
body {
  font-size: 112.5%;
}
hr {
  border-style: solid;
  border-width: .9px 0 0;
}
pre, code {
  font-family: $font-mono;
}
pre {
  margin: unset;
  box-sizing: border-box;
  overflow: scroll;
  max-width: 30em;
  padding: 0.75rem;
  border: 1px solid #dadada;
  border-radius: 3px;
  max-height: 20vw;
  background: #fafafa;

  white-space: pre;
}
h1, h2, h3, h4, h5, h6 {
  font-family: $font-slab;
  font-weight: 100;
}
p {
  max-width: 33em;
}
ul {
  list-style-type: square;
  .AppLayout--side & {
    list-style-type: circle;
    }
}
</style>
<style lang="scss" for="component" scoped>
// #App {}
</style>
<style lang="scss" for="transitions">
.fade{
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