<template>
  <div class="main">
    <no-ssr>
      <vue-gallery-slideshow class="slideshow" :style="'.modal-slideshow__container__image__img {width: 100%}'" :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>

      <div class="header-block">
        <h1 class="header-block__header">Проекты</h1>
      </div>
      <div class="content">
        <img class="content__img content__img-1" :src="images[0]" :key="0" @click="index = 0">
        <img class="content__img content__img-2" :src="images[2]" :key="2" @click="index = 2">
        <img class="content__img content__img-3" :src="images[4]" :key="4" @click="index = 4">
      </div>
    </no-ssr>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  components: {
    VueGallerySlideshow,
  },
  data: function() {
    return {
      images: [
        './project_1-2.png',
        './project_1-1.png',
        './project_3-1.png',
        './project_3-2.png',
        './project_2-1.png',
        './project_2-2.png'
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  height: 70rem;
  // background-color: #eee;
  display: grid;
  grid-template-rows: max-content 1fr;
  justify-content: center;
}

.header-block {
  display: grid;
  justify-content: center;

  &__header {
    font-size: 3.5rem;
  }
}

.content {
  // height: calc(100%-3.5rem);
  position: relative;
  width: 60rem;

  &__img {
    width: 40rem;

    @media only screen and (max-width: 500px) {
      width: 30rem;
    }

    &:hover {
      cursor: pointer;
    }

    &-1 {
      position: absolute;
      top: 18%;
      left: -10%;
      transition: all .2s;

      @media only screen and (max-width: 500px) {
        left: 3%;
      }

      &:hover {
        z-index: 1;
        outline: 1rem solid #ffe34a;
        padding: 1rem;
        transform: scale(1.2);
      }
    }

    &-2 {
      position: absolute;
      top: 28%;
      left: 45%;
      transition: all .2s;

      @media only screen and (max-width: 500px) {
        left: 47%;
      }

      &:hover {
        z-index: 1;
        outline: 1rem solid #ffe34a;
        padding: 1rem;
        transform: scale(1.2);
      }
    }

    &-3 {
      position: absolute;
      top: 52%;
      left: 15%;
      transition: all .2s;

      @media only screen and (max-width: 500px) {
        top: 45%;
        left: 25%;
      }

      &:hover {
        z-index: 1;
        outline: 1rem solid #ffe34a;
        padding: 1rem;
        transform: scale(1.2);
      }
    }
  }
}
</style>
