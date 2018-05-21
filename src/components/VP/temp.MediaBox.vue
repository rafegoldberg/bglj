<template>
  <div class="MediaBox">
    <div class="MediaBox--media">
      <img v-if="image" :alt="title" :src="image">
    </div>
    <div class="MediaBox--excerpt">
      <div class="MediaBox--title">
        <router-link tag="h3" :to="slug">
          <a v-html="title"></a>
        </router-link>
      </div>
      <div class="MediaBox--text" v-html="text"></div>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  props:['title','text','image','slug']
}
</script>

<style lang="scss">
@import "~@/styles/mixin/collapse.scss";
.MediaBox {
  @include collapse(bottom,":last-child")
}
</style>
