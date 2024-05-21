// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/style.css',
  ],

  modules: ["@nuxtjs/tailwindcss"],

  app: {
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
      ]
    }
  }
})