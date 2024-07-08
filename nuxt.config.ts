// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/content",
    '@vueuse/nuxt',
    "@nuxtjs/google-fonts",
    '@nuxtjs/robots',
    "@nuxtjs/sitemap"
  ],
  runtimeConfig: {
    public: {
      msgUrl: "https://ixyz.org/msg-board",
      baseUrl: "https://ixyz.org",
    }
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "zh-cn",
        class: "h-full",
      },
      script: [
        {
          src: 'https://cdn.staticfile.net/twikoo/1.6.35/twikoo.all.min.js',
          defer: true
        }
      ],
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  colorMode:{
    storageKey:"ixyz-theme",
  },
  ui: {
    icons: ['heroicons', 'solar','material-symbols','bi']
  },
  content: {
    highlight: {
      theme: "night-owl",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  robots: {
    /* module options */
    UserAgent: '*',
    Disallow: ''
  },
  site: {
    url: 'https://ixyz.org',
  },
})