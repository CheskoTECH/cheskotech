<template>
  <header class="header">
    <img src="../static/enter.png" alt="logo" class="header__logo">
    <p class="header__title"><span class="header__title-Chesko">Chesko</span><span class="header__title-TECH">TECHNOLOGIES</span></p>
    <a href="https://goo.gl/forms/Iw6m2Fkt25UoMjen2" class="header__cta">Оставить заявку</a>
  </header>
</template>

<style lang="scss" scoped>

.header {
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  height: 10rem;
  border-bottom: 1px solid rgb(228, 228, 228);

  &__logo {
    // border: 1px solid red;
    height: 4rem;
    align-self: center;
    margin-left: 2rem;
    margin-right: .5rem;
  }

  &__title {
    font-family: 'Raleway', sans-serif;
    display: grid;
    align-self: center;
    // margin-left: 8rem;
    font-weight: 900;
    text-align: center;
    line-height: 1;

    &-Chesko {
      display: inline-block;
      font-size: 3rem;
      // color: black;
      // -webkit-text-stroke: 2px black;
      // -webkit-text-fill-color: white;
    }

    &-TECH {
      display: inline-block;
      font-size: 1.3rem;
    }
  }

  &__cta {
    display: grid;
    align-self: center;
    align-content: center;
    justify-self: end;
    text-align: center;

    @media only screen and (max-width: 1200px) {
      margin-right: 3rem;
    }

    margin-right: 10rem;

    border-radius: 1rem;
    height: 5rem;
    width: 14rem;
    color: white;
    text-decoration: none;
    font-size: 1.35rem;
    font-family: 'Roboto Slab', serif;
    // font-family: 'Raleway', sans-serif;
    font-weight: 600;
    // text-transform: uppercase;
    background-color: #FFAF11;
    transition: all .3s;
    border: 2px solid #FFAF11;

    &:hover {
      color: #464646;
      background-color: #fff;
    }
  }
}
</style>
