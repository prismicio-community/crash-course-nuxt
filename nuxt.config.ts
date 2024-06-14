import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Prismic + Nuxt.js Crash Course',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [{ charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Prismic + Nuxt blog example'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  css: ['~/styles/global.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss'
  ],

  prismic: {
    endpoint: repositoryName,
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'page',
          uid: 'home',
          path: '/',
        },
      ]
    }
  },

  tailwindcss: {
    config: {
      content: [
        './app/**/*.{js,ts,vue}',
        './slices/**/*.{js,ts,vue}'
      ],
      theme: {
        extend: {
          colors: {
            "prismic-purple": "#5163ba",
          },
        },
      }
    }
  }
})
