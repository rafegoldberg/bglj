<template>
  <div class="MediaBox">
    <div class="MediaBox--media">
      <img v-if="image" :alt="title" :src="image">
    </div>
    <div class="MediaBox--excerpt">
      <div class="MediaBox--title">
        <h3>{{title}}</h3>
      </div>
      <div class="MediaBox--text" v-html="text"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title','text','image']
}
</script>

<style>

</style>
