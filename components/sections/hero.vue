<template>
    <section class="  relative overflow-hidden">

        <!-- Full screen background image -->
        <div class="absolute inset-0  h-full w-full bg-cover bg-center bg-[url('@/assets/images/heroBg/herodesk.svg')]">
        </div>

        <!-- Content -->
        <div class="container mx-auto px-4 pt-[120px] relative z-10">
            <div class="flex flex-col items-center text-center">
                <div class="w-full mt-[15px]">
                    <h1
                        class="text-5xl md:text-7xl font-bold text-[#FFFFFF] mb-4 leading-[130%] md:leading-[110%] text-center">
                        AutoMate
                    </h1>
                    <h1
                        class="text-5xl md:text-7xl font-medium text-[#FFFFFF] mb-8 leading-[130%] md:leading-[110%]  text-center">
                        Ai Automation for your business
                    </h1>
                    <p class="text-[#FFFFFF] mb-8 font-medium text-xl md:text-2xl leading-[160%]  text-center">
                        Faster than a hire, cheaper than a salary—automation that never sleeps.
                    </p>

                    <button id="scrollToFormBtn"
                        class="px-4 py-3 bg-[#0095D4] text-[#FFFFFF] rounded-lg font-bold text-sm   text-center align-middle transition">
                        Join the waiting list
                    </button>

                </div>
                <div class="flex justify-center">
                    <!-- Mobile image -->
                    <img src="/assets/images/hero2Desktop.svg" alt="تطبيق نمرة"
                        class="block md:hidden w-full h-auto rounded-lg mt-[60px]" />

                    <!-- Desktop image -->
                    <img src="/assets/images/hero2Desktop.svg" alt="تطبيق نمرة"
                        class="hidden md:block w-full h-auto rounded-lg" />
                </div>

            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroSection',
    mounted() {
        document.getElementById('scrollToFormBtn').addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
        });
    }
}
</script>


