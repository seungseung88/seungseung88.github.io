// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@nuxt/fonts'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'material-theme-darker',
        },
      },
    },
  },

  css: ['~/assets/css/main.css'],
  image: {
    dir: 'assets/images',
  },
  fonts: {
    defaults: {
      weights: [400],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'korean', 'japanese'],
    },
    families: [{ name: 'Noto Sans JP', provider: 'google' }],
  },
});
