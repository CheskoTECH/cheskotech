<template>
  <div class="main">
    <div>
      <h1 class="main__header">Интернет - великая сила</h1> <!-- Что вас интересует? -->
      <h2 class="main__subheader">Используйте ее правильно</h2>
    </div>
    <div class="main__features">
      <transition name="fade">
        <p v-show="showOne"><span class="marker marker-1">Фронтенд</span></p> <!-- Веб-разработка-->
      </transition>
      <transition name="fade">
        <p v-show="showTwo"><span class="marker marker-2">Дизайн</span></p>
      </transition>
      <transition name="fade">
        <p v-show="showThree"><span class="marker marker-3">Создание сайтов</span></p>
      </transition>
      <transition name="fade">
        <p v-show="showFour"><span class="marker marker-4">UI / UX</span></p>
      </transition>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  data: function() {
    return {
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false
    }
  },
  created() {
    setTimeout(() => {
      this.showOne = !this.showOne
    }, 1000)
    setTimeout(() => {
      this.showTwo = !this.showTwo
    }, 1500)
    setTimeout(() => {
      this.showThree = !this.showThree
    }, 2000)
    setTimeout(() => {
      this.showFour = !this.showFour
    }, 2500)
  }
}
</script>

<style lang="scss" scoped>

.marker {
  position: relative;
  display: inline-block;
}

.marker::after{
  display: block;
  position: absolute;
  content: "";
  height: 4px;

  width: 100%;
  left: 0;
  bottom: -.4rem;
}

.marker-1::after {
  background-color: #FABB5A;
}

.marker-2::after {
  background-color: #7FC6B6;
}

.marker-3::after {
  background-color: #EDA7A7;
}

.marker-4::after {
  background-color: #4464DF;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.main {
  height: calc(100vh - 10rem);
  display: grid;
  align-content: center;
  justify-content: center;
  max-width: 100%;
  padding: 5rem;
  grid-template-rows: max-content max-content max-content;
  grid-gap: 10rem;

  &__header {
    display: grid;
    justify-self: center;
    justify-content: center;
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  &__subheader {
    display: grid;
    justify-content: center;
    font-size: 3rem;
    // text-transform: uppercase;
    // font-style: italic;
  }

  &__features {
    display: grid;
    grid-template-columns: repeat(4, minmax(20rem, 1fr));
    height: 5rem;

    p {
      display: grid;
      justify-self: center;
      align-self: center;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 700;
      // padding: 1rem;
    }
  }
}
</style>
