<template>
  <nav v-if="!context.loading">
    <template v-for="page in context">
      <router-link :to="`/${page.slug}`" :key="page.id" v-html="page.title.rendered"></router-link>
    </template>
  </nav>
</template>

<script>
import WpAsync from '@/components/wp/async.vue';
export default {
  extends:WpAsync,
  props:{
    parent:{ type:[Number,String,Array], default:0 }
  },
  methods:{
    fetch(API){ return API.pages().parent(this.parent).get() }
  },
}
</script>

<style lang="scss" scoped>
a {
  position: relative;
  margin: 0 -1rem;
  white-space: nowrap;
  display: block;
  padding: 1rem;
  text-decoration: none;
  border: solid transparent;
  border-width: .75px 0;
  color: inherit;
  transition: .2s ease-out, letter-spacing 0s, font-weight 0s;
  &:hover {
    background: #FFF;
  }
  &:hover, &.active {
    border-color: #DDD !important;
    + a {
      border-top-color: transparent !important;
    }
  }
  &.active {
    z-index: 1;
    font-style: italic;
    font-weight: bold;
    letter-spacing: -0.03em;
    color: dodgerblue;
    background: linear-gradient(to right, transparent 50%, #FFF);
    box-shadow: inset 5px 0 0 dodgerblue, 1px 0 0 white;
  }
  &:first-of-type {
    background: transparent !important;
    font-weight: bold;
    padding: 1.5rem 1rem;
    border-bottom: solid #DDD;
    border-width: 0 0 .75px !important;
    & + a { border-top: 0; }
  }
}
</style>
