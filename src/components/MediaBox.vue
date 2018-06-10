<template>
  <div class="MediaBox">
    <router-link tag="h2" :to="slug" class="MediaBox--title">
      <a v-html="title&&title.rendered||title"></a>
    </router-link>
    <VpImg v-if="image" class="MediaBox--media" v-bind="image"></VpImg>
    <div class="MediaBox--excerpt">
      <div class="MediaBox--text" v-html="excerpt&&excerpt.rendered||excerpt"></div>
    </div>
    <footer class="MediaBox--actions">
      <slot/>
    </footer>
  </div>
</template>

<script>

import VpImg from '@/VuePress/img'

export default {
  props:['title','excerpt','image','slug'],
  components:{ VpImg, }
}
</script>

<style lang="scss">
@import "~@/styles/theme/colors.scss";
@import "~@/styles/mixin/button.scss";
@import "~@/styles/mixin/collapse.scss";
@import "~@/styles/extend/text.overflow.scss";
.MediaBox {
  & { // self
    clear: both;
    display: block;
    margin-bottom: 2em;
    @include collapse(bottom,":last-child");

    & + & { margin-top: 3em }
  }
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  &--title {
    max-width: 100%;
    margin: unset;
    @extend %ellipses;
  }
  &--actions {
    clear: left;
  }
  button {
    font-size: 1rem;
    @include button;
    cursor: pointer;
  }
}
</style>
