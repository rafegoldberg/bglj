<template>
<div class="Event">
  

  
  <header>
    <h3 class="Event--title">
      {{title}}
    </h3>
    <time>
      <small>at {{ date | moment("ha on ddd. MM/DD/YY") }}</small>
    </time>
  </header>
  <div class="Event--decorator">
    {{ date | moment("D") }}
    <br>
    {{ date | moment("MMM") }}
  </div>
  
  <div class="Event--details">
    <address>
      <a :href="locate" v-html="locale" target="_BLANK"></a>
    </address>
  </div>

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
  computed:{
    locale(){
      let
      sep = ', ',
      adr = this.address,
      ln1 = adr.split(sep),
      ln2 = ln1.splice(1,ln1.length-1)

      return [ln1,ln2].map( arr=>arr.join(sep) ).join('<br>')
    },
    locate(){
      let
      addr = this.address.replace(',','')
      addr = encodeURIComponent(addr)
      return `https://google.com/maps/place/${addr}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/sizes";
@import "~@/styles/theme/fonts";
@import "~@/styles/theme/breaks";
.Event {
  & {
    position: relative;
    padding: $gutter;
    display: flex;
    flex-flow: nowrap column;
    justify-content: space-between;
  }
    
  time { opacity: .5 }
  address {
    @include breakpoint( min-width 1250px ){
      &:first-line { font-style: normal }
      >:only-child {
        overflow: hidden;
        white-space: pre;
        text-overflow: ellipsis;
        display: block;
      }
    }
  }

  &--title {
    margin: 0;
    align-self: flex-start;
    max-width: 88%;
  }
  &--details {
    font-size: 0.8em;
    opacity: 0.5;
    align-self: flex-end;
    text-align: left;
    min-width: 100%;
    margin-top: 1.5rem;

    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: clip;
  }
  &--decorator {
    position: absolute;
    right: .5rem;
    top: 1rem;
    padding: 0.15em $gutter;
    font-size: calc(400% + 0vw);
    line-height: .5;
    font-family: $font-sans;
    font-weight: 800;
    // text-align: right;
    direction: rtl;
    text-indent: -.5rem;
    text-transform: uppercase;
    letter-spacing: 0 !important;

    color: rgba($theme,.08);

    pointer-events: none;
  }
}
</style>
