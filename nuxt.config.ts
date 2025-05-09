export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/robots'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'AutoMate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'AutoMate is an AI-powered automation platform that helps businesses streamline operations, reduce manual work, and boost productivity through smart workflows and seamless integrations.'
        },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://auto-mate-dun.vercel.app/' }, // replace with actual domain
        { property: 'og:title', content: 'AutoMate' },
        {
          property: 'og:description',
          content:
            'AI-powered workflow automation for businesses. AutoMate simplifies daily operations by automating tasks and integrating with your existing tools — no technical setup required.'
        },
        { property: 'og:image', content: 'https://automate.ai/social-share.jpg' }, // replace with actual image

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://auto-mate-dun.vercel.app/' }, // replace with actual domain
        { property: 'twitter:title', content: 'AutoMate' },
        {
          property: 'twitter:description',
          content:
            'AutoMate helps teams automate workflows, organize tasks, and connect tools like CRMs, ERPs, and chat apps — all with zero code.'
        },
        { property: 'twitter:image', content: 'https://automate.ai/social-share.jpg' } // replace with actual image
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favIcon.svg' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
})
