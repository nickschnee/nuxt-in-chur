// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/style.css',
  ],

  modules: ["@nuxtjs/tailwindcss", "@hypernym/nuxt-anime"],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'MMP Shop',
      meta: [
        {
          name: 'description',
          content: 'This is my MMP-Shop'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
    }
  }
})