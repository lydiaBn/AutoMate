<template>
  <section class=" p-6 bg-white my-12">
    <div class="mx-auto md:px-8">
      <h2 class="mb-6  font-bold text-4xl md:text-5xl md:text-left text-center">
        Join top organizations and entrepreneurs who trust AutoMate
      </h2>

      <div>
        <!-- Desktop view: grid layout -->
        <div class="hidden md:grid md:grid-cols-3 gap-6">
          <TestimonialCard v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial" />
        </div>

        <!-- Mobile view: carousel -->
        <div class="md:hidden relative">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-300 ease-in-out" :style="carouselStyle">
              <div v-for="(testimonial, index) in testimonials" :key="index" class="w-full flex-shrink-0 px-2">
                <TestimonialCard :testimonial="testimonial" />
              </div>
            </div>
          </div>

          <!-- Navigation dots -->
          <div class="flex justify-center mt-4 space-x-2">
            <button v-for="(_, index) in testimonials" :key="index" @click="currentSlide = index"
              class="w-3 h-3 rounded-full transition-colors"
              :class="currentSlide === index ? 'bg-[#6E1DBA]' : 'bg-[#DDDDDD]'" aria-label="Navigate to slide"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import TestimonialCard from '~/components/testimonialCard.vue';
import badr from '../../assets/icons/badr.png';
import abdellah from '../../assets/icons/abdellah.png';
import saoudkh from '../../assets/icons/saoudkh.png';

// Testimonials data
const testimonials = [
  {
    name: 'Saoud Al-Mutairi',
    title: 'Small Business Owner',
    rating: 5,
    text: 'What I liked most about AutoMate is that it works via WhatsApp and Telegram. I didn’t need to install any new app! Everything is organized and I can track my finances easily from my phone.',
    image: saoudkh
  },
  {
    name: 'Abdullah Al-Harbi',
    title: 'Tech Company Founder',
    rating: 5,
    text: 'AutoMate really simplified everything for me in accounting. No need to open software or platforms — I get all the reports and data directly on WhatsApp.',
    image: abdellah
  },
  {
    name: 'Badr Al-Qahtani',
    title: 'Entrepreneur',
    rating: 5,
    text: 'The service is smart and convenient, with communication through WhatsApp without any extra apps. It saved me a lot of time and effort.',
    image: badr
  }
];

// Carousel state
const currentSlide = ref(0);

// Computed style for carousel transform
const carouselStyle = computed(() => {
  return {
    transform: `translateX(-${currentSlide.value * 100}%)`
  };
});
</script>
