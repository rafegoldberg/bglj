<template>
  <div class="Events">

    <div class="Events--grid" v-if="!(context.loading||context.error)">
      <EventWidget v-for="item in context"
        :key="item.slug"
        :title="item.title.rendered"
        :address="item.acf['event-location'].address"
        :date="item.acf['event-date']"></EventWidget>
    </div>
    <LoadCase v-else></LoadCase>

  </div>
</template>

<script>
import WpAsync from '@/components/WpAsync'
import EventWidget from "@/components/Event";
import LoadCase from '@/components/load-case'

export default {
  name: 'Events',
  metas:{
    title: "Events"
  },
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

<style lang="scss" scoped>
.Events {
  $edge: solid #DDD;    
  &--grid {
    & {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 0;
    }
  }
  .Event {
    min-height: 10rem;
    border: $edge;
    border-width: 1px;
    margin-bottom: -1px;
    &:not(:nth-child(3n+1)) {
      margin-left: -1px;
    }
  }
}
</style>