<template>
  <div class="main" >
    <div class="main__wrapper">
      <h1 class="main__header">Обо мне</h1>
      <p class="main__description">Меня зовут Петр, я занимаюсь веб-разработкой и 
        веду свой блог в Инстаграм, где делюсь личными достижениями в программировании и не только и даю некоторые советы.
        </p>
    </div>
  </div>
</template>

<script>
 
export default {
}
</script>

<style lang="scss" scoped>


.main {
  height: 50rem;
  display: grid;
  justify-content: center;
  padding-top: 10rem;

  &__wrapper {
    width: 55rem;
  }

  &__header {
    display: grid;
    justify-content: center;
    font-size: 3.5rem;
    margin-bottom: 3rem;
  } 

  &__description {
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
  } 
}
</style>

