<template>
<div v-if="title" class="PostHead">
  <h2 class="PostHead--title">
    <slot>{{title}}</slot>
  </h2>
</div>
<div v-else>
  {{$log(this)}}
</div>
</template>

<script>
export default {
  props:{
    title:{ type:String, default:"Post Head" }
  }
}
</script>

<style lang="scss" scoped>
.PostHead {
  &--title {
    font-weight: bold;
    text-transform: capitalize;
  }
}
</style>
