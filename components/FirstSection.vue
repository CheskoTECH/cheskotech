<template>
  <div class="main">
    <h1 class="main__header">Что вас интересует?</h1>
    <div class="main__features">
      <p>Веб Разработка</p>
      <p>Дизайн</p>
      <p>Создание сайтов</p>
      <p>UI / UX</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.main {
  height: calc(100vh - 10rem);
  display: grid;
  align-content: center;
  justify-content: center;
  max-width: 100%;
  padding: 5rem;

  &__header {
    display: grid;
    justify-self: center;
    font-size: 5rem;
    margin-bottom: 4rem;
  }

  &__features {
    display: grid;
    grid-template-columns: repeat(4, minmax(15rem, 1fr));

    p {
      display: grid;
      justify-self: center;
      align-self: center;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem;
    }
  }
}
</style>
