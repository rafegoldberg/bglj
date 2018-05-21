<template></template>

<script>
import WP from '@/includes/lib/WordpressAPI';
export default {
  name:'VpConnect',
  methods:{
    /**
     * @public when extending vp/connect, overwrite this method in your
     *         component definition to create custom API access logics.
     * @returns Promise
     */
    fetch(API){
      return API['pages']().id(201).get()
    },
  },
  asyncComputed:{
    async API(){
      let API = await WP
      this.$emit('vp.ready')
      return API
    }
  }
}
</script>