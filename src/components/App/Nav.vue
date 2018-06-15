<template>
<nav class="AppNav">

  <slot></slot>
  
  <ul class="AppNav--page-list" v-if="!context.loading">
    <router-link tag="li" v-for="page in context.acf.menu" :key="page.id" :to="makeLink(page)" :replace="$route.name=='nav'">
      <a>{{page.label}}</a>
    </router-link>
  </ul>
    
  <div class="AppNav--after">
    <slot name="after"></slot>
  </div>

</nav>
</template>

<script>
import VpItem from '@/VuePress/item'
import Inflect from 'inflection'
import url from 'url'
import path from 'path'

export default {
  extends: VpItem,
  props:{
    type:{ default:'page' }
  },
  computed:{
  },
  methods: {
    makeLink(item){
      let
      slug = item.acf_fc_layout=='feed' 
        ? Inflect.pluralize(item.object)
        : item.object,
      href = url.parse( slug ),
      link = href.pathname.replace(this.$router.options.base,'')

      return `/${link}`
    },
    fetch(WP){
      return WP.namespace('bglj/v0').frontpage()
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>

@import "~@/styles/theme/fonts";

.AppNav {
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
    display: block;
    padding: 0 0 0 1em;
    line-height: 2.6;
    font-family: $font-sans;
    .open {
      font-weight: 700;
      list-style-type: disc;
    }
  }
  &--after {
    min-height: 2.8rem;
    transition: all .5s ease-out;
    margin: 1.5rem 0 0;
  }
}

</style>
