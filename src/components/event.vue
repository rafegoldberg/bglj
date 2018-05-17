<template>
<div class="Event">
  
  <header>
    <h3 class="Event--title">{{title}}</h3>
    <time>At <b>{{time}}</b> on <b>{{month}} {{day}}</b> {{year}}</time>
  </header>
  <div class="Event--decorator">{{day}}<br>{{month}}</div>
  
  <small class="Event--details">
    <hr>
    <address v-html="locale"></address>
  </small>

</div>
</template>

<script>
export default {  
  props:{
    title:{
      type: [String,Object],
      default: 'title'
    },
    date:{
      type: [Date,String,Object],
      default: 'date'
    },
    address:{
      type: [String,Object],
      default: 'location'
    },
  },
  created(){
    this.datetime = this.date
  },
  computed:{
    month(){
      return this.datetime.toLocaleString( 'en-US', { month:'short' } )
    },
    year(){
      return this.datetime.toLocaleString( 'en-US', { year:'numeric' } )
    },
    day(){
      return this.datetime.toLocaleString( 'en-US', { day:'numeric' } )
    },
    time(){
      return this.datetime.toLocaleString( 'en-US', { hour:'numeric', minute:'numeric' } )
    },
    locale(){
      let
      sep = ', ',
      adr = this.address,
      ln1 = adr.split(sep),
      ln2 = ln1.splice(1,ln1.length-1)

      return [ln1,ln2].map( arr=>arr.join(sep) ).join('<br>')
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/colors.scss";
.Event {
  & {
    position: relative;
    padding: 1rem;
    display: flex;
    flex-flow: nowrap column;
    justify-content: space-between;
  }
  &--title {
    margin: 0;
    align-self: flex-start;
    max-width: 60%;
  }
  header > time {
    // TODO add class
    font-size: 0.8em;
    opacity: 0.5;
  }
  &--details {
    font-size: 0.8em;
    opacity: 0.5;
    align-self: flex-end;
    text-align: left;
    min-width: 100%;
  }
  &--decorator {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.15em 1rem;
    font-size: calc(200% + 1vw);
    line-height: .9;
    font-weight: 800;
    text-align: right;
    text-transform: uppercase;

    color: rgba(nth($purples,2),.25);

    ponter-events: none;
  }
}
</style>
