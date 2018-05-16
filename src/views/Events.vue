<template>
  <div class="Events">

    <h2>{{$route.name}}</h2>

    <div class="Events--grid" v-if="!(context.loading||context.error)">
      <EventWidget v-for="item in context"
        :key="item.slug"
        :title="item.title.rendered"
        :address="item.acf['event-location'].address"
        :date="item.acf['event-date']"></EventWidget>
    </div>
    <LoadCase v-else></LoadCase>
  
    <router-view></router-view>

  </div>
</template>

<script>
import WpAsync from '@/components/wp/api'
import EventWidget from "@/components/event";
import LoadCase from '@/components/load-case'

export default {
  name: 'Events',
  extends: WpAsync,
  components:{
    EventWidget,
    LoadCase,
  },
  methods:{
    fetch(API){
      let
      type = this.$route.name,
      slug = this.$route.slug,
      ajax = API[type]()
      return ajax.get(function(err,ctx){
        if( err ) return console.error(err);
        ctx.map(v=>{
          v.acf['event-date'] = new Date(v.acf['event-date'])
          return v
          })
        ctx.sort((A,B)=> A.acf['event-date'] <= B.acf['event-date'] ? -1 : 1 )
      })
    }
  }
}
</script>

<style lang="scss">
.Events {
  &--grid {
    $edge: solid rgba(#000,.125);    
    & {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 0;
      border: $edge;
      border-width: 0 1px 1px 0;
    }
    > .Event {
      border: $edge;
      border-width: 1px 0 0 1px;
      min-height: 15rem;
    }
  }
}
</style>