<script>
import WP from '@/lib/wp.api';

export default {
  methods:{
    fetch(API){
      return API.pages().get()
    },
  },
  asyncComputed:{
    context:{
      async get(){
        let data =  await WP.then( this.fetch )
        if( Array.isArray(data) && data.length<=1 )
          return data[0]
        else
          return data
      },
      default:{ loading: 'Loading...' },
      watch(){ this.$route },
    }
  }
}
</script>