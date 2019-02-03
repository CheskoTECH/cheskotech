module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cheskotech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My personal website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Neuton:800|Nosifer|Open+Sans|Raleway:800,900|Roboto+Slab|Stardos+Stencil:700' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/vue-scroll-reveal.js', ssr: false },
    { src: '~plugins/vueGallerySlideshow.js', ssr: false },
    // require('autoprefixer')
  ],
  modules: [
    [ 
      'nuxt-imagemin', 
        {
          context: 'static'
        }
    ]
  ],
  router: {
    //base: '/', // for dev
    base: '/cheskotech/' // for deploy
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    postcss: [
      require('autoprefixer')({
        browsers: ['> 5%']
      })
    ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

