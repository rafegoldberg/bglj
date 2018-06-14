<template>
<div class="Masthead">
  <table v-for="x in info" :key="x.position">
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
</template>

<script>
export default {
  name: "Masthead",
  props:['info']
}
</script>

<style lang="scss" scoped>
@import "~@/styles/theme/colors";
@import "~@/styles/theme/breaks";
.Masthead {
  & {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3px;
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
    }
    // @include breakpoint( max-width 500px ){
    //   width: 100%;
    // }
  }
}
</style>
