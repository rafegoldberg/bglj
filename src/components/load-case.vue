<template>
  <div id="load-indicator"></div>
</template>

<style lang="scss" scoped>
#load-indicator {
  & {
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-height: 12rem;
    height: 25vh;
    max-height: 75vh;
    margin: 0;
    padding: 0;
    background-image: url(//cdn.dribbble.com/users/133876/screenshots/1335747/sun.gif);
    background-size: auto 15em;
    background-position: center;
    background-repeat: no-repeat;

    display: none;
  }
  & {
    position: fixed;
    left: calc(20vw + 1rem);
    width: calc(80vw - 1rem);
    max-height: initial;
    height: 100vh;
    top: 0;
    background-color: #FFF;
  }
}
</style>
