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
import badr from '../../assets/icons/badr.jpg';
import abdellah from '../../assets/icons/abdellah.jpg';
import saoudkh from '../../assets/icons/saoudkh.jpg';

// Testimonials data
const testimonials = [
  {
    name: 'Ahmed Maroufi',
    title: 'Operations Manager, Logistics SME',
    rating: 5,
    text: 'AutoMate helped us automate order tracking and internal task assignments. What used to take hours in spreadsheets now happens instantly with smart workflows.',
    image: saoudkh
  },
  {
    name: 'Susan Miller',
    title: 'HR Lead, Professional Services Firm',
    rating: 5,
    text: 'Our HR team uses AutoMate to handle employee onboarding, document approvals, and leave requests — it’s smooth, fast, and fits right into our existing tools.',
    image: abdellah
  },
  {
    name: 'Yassine Abaoud',
    title: 'Founder, Growing Tech Startup',
    rating: 5,
    text: 'I love that AutoMate connects with our CRM and email tools. I set up automated reports and reminders in minutes — no code, no clutter, just results.',
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
