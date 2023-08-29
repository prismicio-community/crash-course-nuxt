import { repositoryName } from './slicemachine.config.json'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Prismic + Nuxt.js Crash Course',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Prismic + Nuxt blog example'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxtjs/prismic'],

  build: {
    // See: https://github.com/nuxt/postcss8/issues/24
    loaders: {
      css: {
        modules: false
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/styles/global.css'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  prismic: {
    endpoint: `https://${repositoryName}.cdn.prismic.io/api/v2`,
    modern: true,
    linkResolver (doc) {
      if (doc.type === 'page') {
        return doc.uid === 'home' ? '/' : `/${doc.uid}`
      }

      return '/'
    },
    htmlSerializer (type, element, _content, children) {
      switch (type) {
        case 'hyperlink':
          return /* html */ `<a href="${element.data.url}" class="underline decoration-1 underline-offset-1">${children.join('')}</a>`

        default:
          return null
      }
    }
  }
}
