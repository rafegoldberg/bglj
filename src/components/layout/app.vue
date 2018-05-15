<template>
<div class="AppLayout">

  <div class="AppLayout--side">
    <slot name="side"></slot>
  </div>

  <main class="AppLayout--main">
    <header>
      <slot name="head"></slot>
    </header>
    <article>
      <slot>Loading...</slot>
    </article>
    <footer>
      <slot name="foot"></slot>
    </footer>
  </main>

</div>
</template>

<style lang="scss">
@import "~@/styles/fonts.scss";
html, body {
  padding: 0;
  margin: 0;
  font-family: $font-sans;
}
</style>

<style lang="scss" scoped>
.AppLayout{
  & {
    display: flex;
    align-items: stretch;
    min-height: 100vh;
  }
  > * {
    padding: 0 1rem;
  }
  &--side {
    flex: 0 30vw;
  }
  &--main {
    flex: 1 100%
  }
}
</style>