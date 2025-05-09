<script setup>
import { useI18n } from '#imports'
import HeroSection from '~/components/sections/hero.vue'
import HowItWorksSection from '~/components/sections/howItWorks.vue'
import MainFeaturesSection from '~/components/sections/mainFeatures.vue'
import ClientCategoriesSection from '~/components/sections/clientCategories.vue'
import EarlyAdoptersSection from '~/components/sections/earlyAdopters.vue'
import NavBar from '~/components/navBar.vue'
import testemonials from '~/components/sections/testemonials.vue'
const { t } = useI18n()
useHead({
    script :[
        {
            src :"http://localhost/wl_kdQSd7tDdFBlmrIi/script.js"
        }
    ]
})
</script>

<template>
  <div class="mx-auto text-center w-full bg-white">
    <NavBar />
    <HeroSection />
    <HowItWorksSection />
    <MainFeaturesSection />
    <ClientCategoriesSection />
    <EarlyAdoptersSection />
    <testemonials />
  </div>
</template>
