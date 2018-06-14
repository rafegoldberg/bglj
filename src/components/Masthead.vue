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
@import '~@/styles/theme/sizes';
@import '~@/styles/theme/fonts';
@import '~@/styles/theme/breaks';
@import '~@/styles/theme/colors';
.Masthead {
  & {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $gutter;
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
    color: $dark;
    thead th {
      font-weight: 400;
      font-family: $font-slab;
      text-indent: -.36rem;
      color: inherit;
      border-bottom: none;
    }
    td {
      font-size: 0.9em;
      font-style: italic;
    }
  }
}
</style>
