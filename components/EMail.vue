<template>
  <div class="wrapper">
    <div class="main">
      <h1 class="main__header">По любым вопросам <br> пишите сюда <br></h1>  
      <h2 class="main__email">sales@chesko.tech</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.wrapper {
  display: grid;
}

.main {
  display: grid;
  grid-template-rows: 25rem 1fr;
  height: 50rem;
  width: 60rem;
  justify-self: center;
  // background-color: #eee;


  &__header {
    display: grid;
    align-self: center;
    justify-self: center;
    text-align: center;

    font-size: 3.5rem;
    position: relative;

    &::after{
      display: block;
      position: absolute;
      content: "";
      height: 13.6rem;
      width: 4rem;

      background: url("../static/arrow.png") no-repeat;
      background-size: cover;
      left: 80%;
      bottom: -14rem;
    }
  }
  
  &__email {
    display: grid;
    align-self: top;
    justify-self: center;
    padding-top: 5rem;

    font-size: 6rem;
    // font-style: italic;

    // transition: all .1s;

    // &:hover {
    //   text-shadow: 0 7px 20px rgba(0,0,0,0.25);
    //   transform: translateY(-3px);
    // }
  }
}
</style>
