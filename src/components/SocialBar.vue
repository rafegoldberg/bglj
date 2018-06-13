<template>  
<div class="SocialBar">

  <hr>
  <Social :url="url" inline-template> <div>

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
  <hr>

</div>
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
