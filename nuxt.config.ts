// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

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
        { property: 'og:title', content: 'AutoMate' },
        { property: 'og:description', content: 'نمرة هي خدمة محاسبة ذكية تدعم الشركات الصغيرة والمتوسطة في السعودية. تُسهّل تسجيل المعاملات وتنظيم الوثائق وتوليد التقارير عبر واتساب وتيليغرام، دون الحاجة إلى تثبيت تطبيق جديد' },
        { property: 'og:image', content: 'https://nemra.sa/social-share.jpg' }, // Ajoutez votre image ici

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://nemra.sa/' },
        { property: 'twitter:title', content: 'AutoMate' },
        { property: 'twitter:description', content: 'نمرة هي خدمة محاسبة ذكية تدعم الشركات الصغيرة والمتوسطة في السعودية. تُسهّل تسجيل المعاملات وتنظيم الوثائق وتوليد التقارير عبر واتساب وتيليغرام، دون الحاجة إلى تثبيت تطبيق جديد' },
        { property: 'twitter:image', content: 'https://nemra.sa/social-share.jpg' }, // Ajoutez votre image ici
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/favIcon.svg' } ,
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic&display=swap'
        }
      ]
    }
  },

   css: ['~/assets/css/main.css'],
})
