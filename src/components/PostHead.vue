<template>
<div v-if="title" class="PostHead">
  <h2 class="PostHead--title">{{title}}</h2>
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
