<template>
  <div class="main">
    <Header />
    <FirstSection />
    <About />
  </div>
</template>

<script>
import Header from '~/layouts/Header.vue'

import FirstSection from '~/components/FirstSection.vue'
import About from '~/components/About.vue'

export default {
  components: {
    FirstSection,
    Header,
    About
  }
}
</script>

<style>
.main {
  /* min-height: 100vh; */
}

/* .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>

