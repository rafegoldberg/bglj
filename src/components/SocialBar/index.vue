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

<style lang="scss" scoped>

@import "~@/styles/theme/colors";

.SocialBar {
  margin: 1.5em 0; 
  border: solid $edge;

  border-radius: 3px;
  border-width: .975px;

  border-radius: 0;
  border-width: .975px 0;

  // float: left;
  // margin-top: .5em;
  // margin-right: 2em;
}

</style>
<style lang="scss">

@import "~@/styles/theme/colors";

.Boxrow {
  display: flex;
  flex-flow: nowrap row;
  > * {
    padding: .5em .75em;
    cursor: pointer;
    &:hover { background: rgba(0,0,0,.12) }
    & + *   { border-left: 1px solid $edge }
  }
}

</style>
