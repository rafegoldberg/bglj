<template>
  <div class="WpPost">
    <b class="WpPost--title">{{$route.params.id}}</b>
  </div>
</template>

<script>
export default {
  name:"Post",
  props:{
    title:{
      type: String,
      default: "Post Title"
    }
  }
}
</script>


<style lang="scss" scoped>
.WpPost{
  &--title {
    test: "component";
  }
}
</style>
