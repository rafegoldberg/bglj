<template>
<Social :url="url" class="SocialBar" inline-template> <div class="Boxrow">

  <!-- Facebook -->
  <network network="facebook">
    <i class="fa fa-fw fa-facebook"></i> 
  </network>

  <!-- Google+ -->
  <network network="googleplus">
    <i class="fa fa-fw fa-google-plus"></i> 
  </network>

  <!-- Reddit -->
  <network network="reddit">
    <i class="fa fa-fw fa-reddit"></i> 
  </network>

  <!-- Twitter -->
  <network network="twitter">
    <i class="fa fa-fw fa-twitter"></i> 
  </network>

</div> </Social>
</template>

<script>
import Social from 'vue-social-sharing'

let
URI = window.location.href || '';

export default {
  name: "SocialBar",
  components:{ Social },
  props:{
    url:{
      type: String,
      default: URI
    }
  }
}
</script>

<style lang="scss">

@import "~@/styles/theme/colors";

.SocialBar {

  $transition: .4s ease-out;
  
  border: solid $edge;
  border-width: .975px 0;
  > * {
    padding: .5em .75em;
    cursor: pointer;
    box-shadow: 0 0 0 -5px transparent;
    transition: $transition;
    &:hover, &:active {
      z-index: 1;
      color: $theme;
      background: $edge;
      box-shadow: 0 0 0 5.5px $edge;
      transition-delay: .1s;
    }
    &:first-child { margin-left: -.25rem }
    & + * { border-left: 1px solid $edge }
  }
}

</style>
<style lang="scss">
.Boxrow {
  display: flex;
  flex-flow: nowrap row;
}
</style>
