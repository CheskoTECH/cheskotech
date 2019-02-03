<template>
  <div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
    >
      <slot/>
    </transition> 
  </div>
</template>

<script>
export default {
  props: {
    duration: Number,
  },
  data: () => ({
    show: false
  }),
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1 }, { duration: this.duration, complete: done });
    }
  }
}
</script>