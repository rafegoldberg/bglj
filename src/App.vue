<template>
<AppLayout id="App">
  
  <AppNav slot="side">

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
  
  <small slot="foot" style="display: flex; justify-content: space-between; align-items: center; line-height: 1; font-size:.75em">
    <div style="margin: 1em 0">
      <a id="donate" :href="donateLink" target="_BLANK">
        <b>Donate to the Journal</b>
      </a> 
    </div>
    <div style="transform: translate(0,3px)">
      ©{{new Date(Date.now()).getFullYear()}} — <em>the Berkley Journal of Gender, Law & Justice</em>
    </div>
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
  data:()=>({
    donateLink:"https://give.berkeley.edu/egiving/index.cfm?Fund=FN6201000&Org=Berkeley%2520Journal%2520of%2520Gender%2520Law%2520and%2520Justice&project=Berkeley%2520Journal%2520of%2520Gender%2520Law%2520and%2520Justice&simpleform=0)"
  }),
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
@import "~@/styles/doc";
@import "~@/styles/mixin/button";
@import "~vue2-animate/src/sass/vue2-animate";
#donate {
  @include button;
  display: inline-block;
  margin-bottom: -3px;
  padding: .66rem .8rem;
  line-height: 1.2;
  border-radius: 4em;
  // box-shadow: 2px 4px 0 -1px rgba(0,0,0,.088);
  &:hover {
    box-shadow: 2px 3px 3px -1px rgba(0,0,0,.25);
  }
  &:active {
    color: rgba($matte,.6);
    box-shadow: 2px 3px 3px -1px rgba(0,0,0,0);
  }
}
</style>
<style lang="scss">
%textContent {
  margin: unset;
  & + & { margin-top: 1.3rem }
}
article {
  line-height: 1.6;
  p, ol, ul {
    @extend %textContent;
  }
}
</style>
<style lang="scss" id="articleLinks@css">
@import "~@/styles/theme/colors";
article a {
  position: relative;
  z-index: 0;
  color: $theme;
  font-family: inherit;
  text-decoration: underline $theme;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-skip-ink: none;
  transition: .4s ease-out;
  transition-delay: 0s;
  box-shadow: 0 0 0 transparent;
  border-radius: 2px;
  &:hover, &:focus {
    background-color: $theme;
    color: $matte;
    box-shadow:
      5px 0 0 1px $theme,
      -5px 0 0 1px $theme,
      0 2px 8px 2px rgba(#000000,.3),
      0 0 24px 48px rgba($matte,.3);
    transition-delay: 1.5s;
  }
}
</style>
