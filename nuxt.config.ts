// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
  },

  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
})
