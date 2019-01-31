<template>
  <header class="header">
    <p class="header__title">Chesko.TECH</p>
    <a href="#" class="header__cta">Оставить заявку</a>
  </header>
</template>

<style lang="scss" scoped>

.header {
  display: grid;
  grid-template-columns: max-content 1fr;
  height: 10rem;
  border-bottom: 1px solid rgb(228, 228, 228);

  &__title {
    font-family: 'Raleway', sans-serif;
    display: grid;
    align-self: center;
    margin-left: 2rem;
    font-size: 3rem;
    font-weight: 900;
  }

  &__cta {
    display: grid;
    align-self: center;
    align-content: center;
    justify-self: end;
    text-align: center;

    margin-right: 10rem;

    border-radius: 1rem;
    height: 5rem;
    width: 14rem;
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    font-family: 'Roboto Slab', serif;
    // font-family: 'Raleway', sans-serif;
    font-weight: 600;
    // text-transform: uppercase;
    background-color: #FFAF11;
    transition: all .3s;

    &:hover {
      color: #464646;
      background-color: #fff;
      border: 2px solid #FFAF11;
    }
  }
}
</style>
