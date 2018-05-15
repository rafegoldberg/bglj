<template>
  <div class="Test">
    <h2>{{$route.name}}</h2>
    <hr>
    <slot>
      <router-view></router-view>
    </slot>
  </div>
</template>

<script>
import WpAsync from '@/components/wp/api'

export default {
  name: 'Test',
  extends: WpAsync,
  methods:{
    fetch(API){
      let
      type = this.$route.name,
      slug = this.$route.slug,
      ajax = API[type]()
      if( slug ) ajax.slug(slug)
      return ajax.get()
    }
  }
}
</script>