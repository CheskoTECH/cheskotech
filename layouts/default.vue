<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>

export default {
  head () {
    return {
      titleTemplate: `CheskoTECH | Сайты, SEO, Дизайн и брендинг`
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Neuton:800|Nosifer|Open+Sans|Raleway:800,900|Roboto+Slab|Stardos+Stencil:700');

// RESPONSIVE BREAKPOINTS
$bp-largest: 75em;   // 1200px
$bp-large: 62.5em;   // 1000px
$bp-medium: 56.25em;    // 900px;
$bp-small: 37.5em;    // 600px;

:root {
  --header-height: 8rem;
}

body {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  /* font-family: 'Open Sans', sans-serif; */
  font-size: 62.5%;
  /* font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased; */
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  // width: 100vw; // Чтобы не было горизонт скролла, надо отключать чтобы исправлять баги элементов

  @media only screen and (max-width: 2500px) {
        font-size: 100%;
  }

  @media only screen and (max-width: 2000px) {
        font-size: 80%;
  }

  @media only screen and (max-width: 1700px) {
        font-size: 66.25%;
  }

  @media only screen and (max-width: $bp-largest) {
        font-size: 56.25%;
  }

  @media only screen and (max-width: $bp-large) {
        font-size: 52.25%;
  }

  @media only screen and (max-width: $bp-medium) {
        font-size: 50%;
  }

  @media only screen and (max-width: $bp-small) {
        font-size: 40%;
  }

  @media only screen and (max-width: 400px) {
        font-size: 35%;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

</style>

