// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.sass'
  },
})
