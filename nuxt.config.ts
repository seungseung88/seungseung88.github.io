// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'スンスンの開発ブログ',
      htmlAttrs: {
        lang: 'jp',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/image', '@nuxt/fonts'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
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
