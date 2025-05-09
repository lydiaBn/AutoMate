<template>
    <section>
        <div class="mx-auto p-[25px] mb-5">
            <h2 class="text-center mb-8 font-bold text-4xl md:text-5xl">
                Tailored for Professionals Who Value Time
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-4">
                <!-- 1st type -->
                <div class="flex flex-col items-center text-center">
                    <div class="mb-6 rounded-lg overflow-hidden w-full h-[450px]">
                        <img
                            src="~/assets/images/SME.png"
                            alt="لأصحاب المشاريع الصغيرة"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <h3 class="text-2xl md:text-[26px] font-bold text-center align-middle">
                        Small to Medium Enterprises (SMEs)
                    </h3>
                </div>

                <!-- 2nd type -->
                <div class="flex flex-col items-center text-center">
                    <div class="mb-6 rounded-lg overflow-hidden w-full h-[450px]">
                        <img
                            src="~/assets/images/corporate.png"
                            alt="للمستقلين"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <h3 class="text-2xl md:text-[26px] font-bold text-center align-middle">
                        Corporate Enterprises
                    </h3>
                </div>

                <!-- 3rd type -->
                <div class="flex flex-col items-center text-center">
                    <div class="mb-6 rounded-lg overflow-hidden w-full h-[450px]">
                        <img
                            src="~/assets/images/gov.png"
                            alt="للي يبغون محاسبة بدون تعقيد"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <h3 class="text-2xl md:text-[26px] font-bold text-center align-middle">
                        Government Agencies
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ClientCategoriesSection'
}
</script>
