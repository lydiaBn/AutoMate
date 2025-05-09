// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/robots', '@nuxtjs/i18n', '@nuxt/fonts'],

  i18n: {
    locales: [ // Add your supported locales here
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
    ],
    lazy: true, // Lazy load translations
    langDir: 'locales/', // Directory for translation files
    defaultLocale: 'en', // Default locale
    strategy: 'prefix_except_default' // URL prefixing strategy
    // vueI18n: './i18n.options.js' // Removed as the file doesn't exist yet
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ar', // Changé pour l'arabe
      },
      title: 'AutoMate',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'نمرة هي خدمة محاسبة ذكية تدعم الشركات الصغيرة والمتوسطة في السعودية. تُسهّل تسجيل المعاملات وتنظيم الوثائق وتوليد التقارير عبر واتساب وتيليغرام، دون الحاجة إلى تثبيت تطبيق جديد' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nemra.sa/' },
        { property: 'og:title', content: 'Automate' },
        { property: 'og:image', content: '/public/webthumbnail.jpg' }, 
        { property: 'og:url', content: 'https://yourwebsite.com' },


        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://nemra.sa/' },
        { property: 'twitter:title', content: 'Automate' },
        { property: 'twitter:description', content: 'نمرة هي خدمة محاسبة ذكية تدعم الشركات الصغيرة والمتوسطة في السعودية. تُسهّل تسجيل المعاملات وتنظيم الوثائق وتوليد التقارير عبر واتساب وتيليغرام، دون الحاجة إلى تثبيت تطبيق جديد' },
        { property: 'twitter:image', content: '/public/webthumbnail.jpg' }, 
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favIcon.svg' } // Link to favicon
      ]
    }
  },

  // Optional: Add global CSS if needed
  css: ['~/assets/css/main.css'],
}