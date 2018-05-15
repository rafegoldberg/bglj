<template>
</template>

<script>
import WP from '@/includes/wp.api';

export default {
  props:{
    endpoint:{
      type: String,
      default: 'pages'
    }
  },
  methods:{
    /**
     * @public overwrite this method in your component with custom API access logic
     * @returns Promise
     */
    fetch(API){
      return API[this.endpoint]().get()
    },
  },
  asyncComputed:{
    API:{
      async get(){
        let API = await WP
        return API
      },
      default:{ loading: 'Discovering your API...' },
    },
    context:{
      async get(){
        let data = await WP.then( this.fetch )

        if( Array.isArray(data) && data.length==1 )
          return data[0]
        else
          return data
      },
      default:{ loading: 'Loading...' },
      watch(){ this.$route.params }
    }
  }
}
</script>