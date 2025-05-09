// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
    '@nuxt/fonts'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // Set default as English
      },
      title: 'AutoMate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            ' AutoMate is an AI-powered automation platform that helps businesses streamline workflows, reduce manual work, and improve team productivity through smart, integrated solutions.'
        },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://automate.ai/' }, // Replace with real domain
        { property: 'og:title', content: 'AutoMate' },
        {
          property: 'og:description',
          content:
            ' Streamline your business with AI-powered automation, AutoMate simplifies your processes, boosts productivity, and integrates seamlessly with the tools you already use.'
        },
        { property: 'og:image', content: 'https://automate.ai/social-share.jpg' }, // Replace with real image URL

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://automate.ai/' },
        { property: 'twitter:title', content: 'AutoMate' },
        {
          property: 'twitter:description',
          content:
            ' AutoMate helps teams automate workflows, organize tasks, and connect with CRMs, ERPs, and messaging apps — all without writing code.'
        },
        { property: 'twitter:image', content: 'https://automate.ai/social-share.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favIcon.svg' }
      ]
    }
  },

  css: ['~/assets/css/main.css']
}
