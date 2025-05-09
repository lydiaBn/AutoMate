<template>
  <div class="flex flex-col text-left p-6 bg-[#FCFAFF] rounded-lg shadow-sm">
    <div class="mb-3 flex items-center justify-start gap-4">
      <!-- Image on the left -->
      <div class="relative flex-shrink-0 h-16 w-16">
        <img :src="testimonial.image" :alt="testimonial.name" class="rounded-full object-cover h-full w-full" />
      </div>

      <!-- Textual info on the right -->
      <div class="flex flex-col text-left">
        <h3 class="font-bold text-lg mb-1 text-[#33384A]">{{ testimonial.name }}</h3>
        <p class="font-normal text-base tracking-normal text-[#33384A]">
          {{ testimonial.title }}
        </p>
      </div>
    </div>

    <!-- Star rating aligned to left -->
    <div class="flex mb-3">
      <img
        v-for="star in 5"
        :key="star"
        :src="(5 - star) >= testimonial.rating ? blackStar : goldStar"
        :alt="(5 - star) >= testimonial.rating ? 'black star' : 'gold star'"
        class="w-6 h-6"
      />
    </div>

    <p class="font-medium text-base tracking-normal text-left align-middle text-[#33384A]">
      {{ testimonial.text }}
    </p>
  </div>
</template>

<script setup>
import goldStar from '../assets/icons/goldStar.svg';
import blackStar from '../assets/icons/blackStar.svg';

defineProps({
  testimonial: {
    type: Object,
    required: true
  }
});
</script>
