<script setup>
// Nuxt 3 auto-imports these, but explicit import can help clarity/avoid issues
import { computed } from 'vue'
import { useI18n } from '#imports' // Use Nuxt's auto-import alias
import Footer from '~/components/footer.vue'

const { locale, locales, setLocale, t } = useI18n()

const availableLocales = computed(() => {
  // Ensure locales.value is treated as an array and filter out the current locale
  // The structure of locale objects comes from the i18n config in nuxt.config.js
  return (locales.value || []).filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="min-h-screen">

    <main class="">
      <!-- This is just the layout container, we'll add header, footer, etc. later -->
      <slot />
    </main>

    <!-- Add a basic footer later if needed -->

    <Footer/>
  </div>
</template>
