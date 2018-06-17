<template>
<nav class="AppNav">

  <slot></slot>
  
  <ul class="AppNav--page-list" v-if="!context.loading">
    <router-link tag="li" v-for="page in context.acf.menu" :key="page.id" :to="makeLink(page)" :replace="$route.name=='nav'">
      <a>{{page.label}}</a><span v-if="page.showTree">...</span>
      <SubNav v-if="page.showTree" v-bind="page"></SubNav>
    </router-link>
  </ul>
    
  <div class="AppNav--after">
    <slot name="after"></slot>
  </div>

</nav>
</template>

<script>
import VpItem from '@/VuePress/item'
import SubNav from '@/components/App/Nav/Sub'

import Inflect from 'inflection'
import url from 'url'
import path from 'path'

export default {
  extends: VpItem,
  components:{ SubNav },
  props:{
    type:{ default:'page' }
  },
  methods: {
    makeLink(item){
      let
      slug = item.acf_fc_layout=='feed' 
        ? Inflect.pluralize(item.object)
        : item.object || item.link,
      href = url.parse(slug) || item.link,
      link = href.pathname.replace(this.$router.options.base,'')
      return `/${link}`
    },
    fetch(WP){
      return WP.namespace('bglj/v0').frontpage()
    }
  },
}
</script>

<style lang="scss">

@import "~@/styles/theme/breaks";
@import "~@/styles/theme/fonts";

.AppNav {
  $base: #{&};
  & {
    position: sticky;
    top: 0;
  }
  &--title {
    font-size: 1.25em;
    margin-bottom: 1em;
    display: block;
    &, &* { font-weight: 100 !important }
    line-height: 1.1;
    transition: opacity .2s .1s ease-out;
    &.out {
      opacity: 0;
      pointer-events: none;
    }
  }
  &--page-list {
    &, .SubNav {
      display: block;
      padding: 0 0 0 1em;
      line-height: 2.6;
    }
    .SubNav {
      opacity: 0.88;
    }
    > li.open > a {
      font-weight: 700;
      text-decoration: none !important;
    }
    li {
      @include breakpoint( min-width $break ){
        &:not(.open) .SubNav {
          display: none;
        }
      }
      &.open {
        list-style-type: disc;
      }
      &.active > a:only-of-type {
        text-decoration: underline;
      }
    }
  }
  &--after {
    // min-height: 2.8rem;
    // margin: 1.5rem 0 0;
    transition: all .5s ease-out;
  }
}

</style>
