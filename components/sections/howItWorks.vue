<template>
  <section class=" mx-auto p-[25px] py-10 md:py-20">
    <h1 class="text-center mb-6 md:mb-16  font-bold text-4xl md:text-5xl">
      How AutoMate Works
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      <!-- Step 1 -->
      <div class="text-center p-6 ">
        <div class="h-[64px] w-[64px] flex items-center justify-center mx-auto mb-3">
          <img src="/assets/icons/1step.png" alt="Send Message" />
        </div>
        <p class="font-bold text-xl md:text-2xl text-center">
          1. Connect
        </p>
      </div>

      <!-- Step 2 -->
      <div class="text-center p-6 ">
        <div class="h-[64px] w-[64px] flex items-center justify-center mx-auto mb-3">
          <img src="/assets/icons/2step.png" alt="Bot Response" />
        </div>
        <p class="font-bold text-xl md:text-2xl text-center">
          2. Configure
        </p>
      </div>

      <!-- Step 3 -->
      <div class="text-center p-6 ">
        <div class=" h-[64px] w-[64px] flex items-center justify-center mx-auto mb-3">
          <img src="/assets/icons/3step.png" alt="Process Record" />
        </div>
        <p class="font-bold text-xl md:text-2xl text-center">
          3. Execute
        </p>
      </div>

      <!-- Step 4 -->
      <div class="text-center p-6 ">
        <div class=" h-[64px] w-[64px] flex items-center justify-center mx-auto mb-3">
          <img src="/assets/icons/4step.png" alt="Confirmation" />
        </div>
        <p class="font-bold text-xl md:text-2xl text-center">
          4. Monitor
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorksSection'
}
</script>
