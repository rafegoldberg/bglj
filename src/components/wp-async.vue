<script>
import WP from '@/lib/wp-api';

export default {
  methods:{
    fetch(API){
      return API.pages().get()
    },
  },
  asyncComputed:{
    page:{
      async get(){
        let page =  await WP.then( this.fetch );
        return page[0]
      },
      watch(){ this.$route },
    }
  }
}
</script>