<template>
<ul class="SubNav" v-if="!context.loading">

  <router-link tag="li" v-for="item in context" :to="{ path:makeLink(item), query: { wpid:item.id }}" :key="item.id">
    <a>{{item.title.rendered}}</a>
  </router-link>

</ul>
</template>
<script>
import VpList from "@/VuePress/list"
export default {
  name:"SubNav",
  extends: VpList,
  props:["id"],
  methods:{
    makeLink(item){
      return this.$parent.$parent.makeLink(item)
    },
    fetch(WP){
      if( !this.API ) return
      return this.API.pages().parent(this.id)
    }
  }
}
</script>
<style lang="scss">
@import "~@/styles/theme/fonts";
.SubNav {
  li {
    font-style: italic;
    list-style-type: square !important;
  }
}
</style>
