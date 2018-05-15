<template>
</template>

<script>
import WP from '@/includes/wp.api';

export default {
  props:[
    'endpoint'
  ],
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
        // TODO: add 'api-base-url' prop
        let API = await WP
        return API
      },
      default:{ loading: 'Discovering your API...' },
    },
    context:{
      async get(){
        let API = await WP.then(this.fetch)
        return API
      },
      default:{ loading: 'Loading...' },
    }
  }
}
</script>