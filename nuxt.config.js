import ja from './static/json/ja.json'
import en from './static/json/en.json'
import config from './.contentful.json'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PREVIEW_ACCESS_TOKEN: config.CTF_PREVIEW_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tsugawalab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    '~/assets/css/default.css',
    '~/assets/css/defaultColor.css',
    '~/assets/css/prettify.css',
    '~/assets/css/responsive.gs.24col.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/markdownit',
    { src: '@/plugins/vue-awesome-swiper.js', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
    '@nuxtjs/markdownit',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-awesome-swiper'],
  },
  router: {
    base: '/',
  },
  i18n: {
    locales: [
      {
        code: 'ja',
        name: 'JA',
      },
      {
        code: 'en',
        name: 'EN',
      },
    ],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        en,
        ja,
      },
    },
  },
}
