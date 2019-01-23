<template>
  <div class="main">
    <h1 class="main__header">Что-то интересует?</h1> <!-- Что вас интересует? -->
    <div class="main__features">
      <transition name="fade">
        <p v-show="showOne">Веб Разработка</p>
      </transition>
      <transition name="fade">
        <p v-show="showTwo">Дизайн</p>
      </transition>
      <transition name="fade">
        <p v-show="showThree">Создание сайтов</p>
      </transition>
      <transition name="fade">
        <p v-show="showFour">UI / UX</p>
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
  grid-template-rows: max-content max-content;
  grid-gap: 10rem;

  &__header {
    display: grid;
    justify-self: center;
    font-size: 5rem;
    // margin-bottom: 4rem;
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
