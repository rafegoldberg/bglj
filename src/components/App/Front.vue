<template>
  <div class="AppFront">
    <small>the Berkley Journal of</small>
    <h1>Gender, Law <em>&amp;</em> Justice</h1>
  </div>
</template>

<script>
export default {
  name: 'AppFront',
}
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/colors.scss";

.AppFront {
  color: nth($purples,2);
  h1 {
    margin: 0;
    font-family: $font-serif;
    font-size: 4em;
    letter-spacing: -0.01em;
    line-height: .8;
  }
  small {
    display: inline-block;
    margin-left: 0.5rem;
    font-family: $font-slab;
    text-transform: uppercase;
    line-height: 4;
    letter-spacing: 2px;
  }
}
</style>
