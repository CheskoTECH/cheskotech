<template>
  <footer class="footer">
    <p class="footer__title">2019 &copy; Chesko.TECH</p>
    <a href="#" class="footer__cta">Оставить заявку</a>
  </footer>
</template>

<style lang="scss" scoped>

.footer {
  display: grid;
  grid-template-columns: max-content 1fr;
  height: 20rem;
  background-color: #444C5E;

  &__title {
    font-family: 'Raleway', sans-serif;
    display: grid;
    align-self: center;
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: 800;
    color: #fff;
  }

  &__cta {
    display: grid;
    align-self: center;
    align-content: center;
    justify-self: end;
    text-align: center;

    margin-right: 10rem;

    border-radius: 1rem;
    height: 7rem;
    width: 21rem;
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    font-family: 'Roboto Slab', serif;
    // font-family: 'Raleway', sans-serif;
    font-weight: 600;
    // text-transform: uppercase;
    // background-color: #444C5E;
    background-color: #F6554D;
    transition: all .3s;
    // border: 2px solid #FFAF11;


    &:hover {
      color: #fff;
      background-color: #444C5E;
      border: 2px solid #F6554D;
    }
  }
}
</style>
