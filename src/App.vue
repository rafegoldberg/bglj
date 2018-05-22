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
@import '~@/styles/colors.scss';
html, body {
  margin: 0;
  padding: 0;
  line-height: 1.3;
  font-family: $font-sans;
  background-color: #fbfbf6;
}
body {
  font-size: 115%;
}

* {
  box-sizing: border-box
}

img {
  max-width: 100%;
  width: auto;
  height: auto;
}

hr {
  border-style: solid;
  border-width: .9px 0 0;
}

pre, code, tt, var {
  font-family: $font-mono;
}
var {
  font-weight: bold;
  &:before {
    content: "$";
    font-weight: normal;
  }
}
pre {
  white-space: pre;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  margin: unset;
  box-sizing: border-box;
  max-width: 100%;
  max-height: 75vw;
  padding: 0.75rem;

  background: #fafafa;
  border: 1px solid #dadada;
  border-radius: 3px;
}

address {
  & { // self 
    font-style: italic;
  }
  &:first-line {
    font-style: normal;
    font-weight: bold;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-slab;
  font-weight: 100;
}
h5, h6 { font-weight: 400 }
h6 {
  text-transform: uppercase;
  letter-spacing: .05em;
  }

p, ul, ol, dd, blockquote, details {
  max-width: 42em;
}

blockquote {
  border-left: 4px solid #DDD;
  margin: 1em .5em;
  padding: 0 1em;
}

ol {}
ul {
  list-style-type: square;
  .AppLayout--side & {
    list-style-type: circle;
    }
}
dl {
  dt {
    margin-top: 1rem;
    font-family: $font-slab;
    font-style: italic;
  }
  dd {
    margin: .5rem;
    padding: .5rem .75rem;
    border-left: 3px solid $edge;
  }
}
li {
  margin: .5rem 0;
}

table {
  & { // self 
    border-collapse: collapse;
    }
  thead {
    tr {
      border-bottom: 1px solid $matte;
    }
  }
  tbody {}
  tfoot {}
  tr:last-child {
    td {
      border-bottom: none
    }
  }
  th, td {
    padding: .75rem;
    border-style: solid;
    border-width: 1px;
    &:first-child { border-left:  none }
    &:last-child  { border-right: none }
  }
  th {
    background: mix(
      nth($theme,4),
      nth($theme,5),
      96%
      );
    border-color: $matte !important;
  }
  td {
    border-color: $edge !important;
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