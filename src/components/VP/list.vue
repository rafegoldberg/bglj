<template>
  <ul v-if="!context.loading">
    <slot name="item" v-for="item in context">
      <MediaBox :title="item.title.rendered" :text="item.excerpt.rendered" :image="item.acf.image"></MediaBox>
    </slot>
  </ul>
</template>

<script>
import VpConnect from './connect';
import MediaBox from './temp.MediaBox';

export default {
  name:'VpList',
  extends: VpConnect,
  components:{ MediaBox },
  props:{
    type:{ type:String, default:'posts' }
  },
  methods:{
    fetch(WP){
      return this.endpoint.get()
    }
  },
  computed:{
    endpoint(){
      if( this.API )
        return this.API[this.type]()
    }
  },
  asyncComputed:{
    context:{
      default:{ loading:true },
      async get(){
        if( !this.API ) return {loading:true}

        let
        error = false,
        data  = await this.fetch( this.API ).catch(e=>( error = e ))
        
        if( error )
          return {error}
        if( typeof data=='object' && !Array.isArray(data) )
          return [data]
        else
          return data
      },
      watch(){ this.$route.params }
    }
  }
}
</script>