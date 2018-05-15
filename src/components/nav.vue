<template>
<nav>
  
  <h1>
    <router-link :to="'/home'">BGLJ</router-link>
  </h1>

  <hr>
  
  <router-link :to="'/online'">Page</router-link>
  <router-link :to="'/submit/catherine-albiston-prize'">Subpage</router-link>

  <slot></slot>

</nav>
</template>

<script>
import WpAsync from "./wp/api";
export default {
  extends: WpAsync,
}
</script>
