<template>
  <div class="Home">
    <small>the Berkley Journal of</small>
    <h1>Gender, Law <em>&amp;</em> Justice</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/colors.scss";

.Home {
  color: nth($purples,2);
  }
small {
  display: inline-block;
  font-family: $font-slab;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 0.5rem;
}
h1 {
  margin: 0;
  font-family: $font-serif;
  font-size: 4em;
  letter-spacing: -0.01em;
  line-height: 1.4;
}
</style>
