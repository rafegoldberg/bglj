<template>
<div class="Masthead">

  <div v-for="x in info" :key="x.position">
  <table>
    <thead>
      <th>{{x.position}}</th>
    </thead>
    <tbody>
      <component is="tr" v-for="u in x.people" :key="u.name">
        <td>{{u.name}}</td>
      </component>
    </tbody>
  </table>
  </div>

</div>
</template>

<script>
export default {
  name: "Masthead",
  props:['info']
}
</script>

<style lang="scss" scoped>
@import '~@/styles/theme/fonts';
@import '~@/styles/theme/breaks';
@import '~@/styles/theme/colors';
.Masthead {
  & {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  @include breakpoint( max-width $break ){
    grid-template-columns: repeat(2,1fr); 
  }
  @include breakpoint( max-width 500px ){
    grid-template-columns: repeat(1,1fr);
  }
  table {
    table-layout: fixed;
    width: 100%;
    thead th {
      border-bottom: none;
      font-weight: 400;
      font-family: $font-serif;
      font-style: italic;
      text-indent: -.36rem;
      box-shadow: -1rem 0 0 $matte;
    }
    td {
      font-family: $font-slab;
      font-size: 0.9em;
    }
    tr td {
      // border-color: red !important;
    }
    // @include breakpoint( max-width 500px ){
    //   width: 100%;
    // }
  }
}
</style>
