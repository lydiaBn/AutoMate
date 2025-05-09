<template>
    <section id="formSection" class="relative rtl">
        <div class="w-full h-full bg-cover bg-center bg-[url('@/assets/images/bgPurple.svg')]">
            <div class="p-9 md:p-20 w-full ">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


                    <!-- Right side - Phone image -->
                    <div class="w-full flex justify-center md:justify-end">
                        <img src="/assets/images/phoneScreenshot.svg" alt="Namrah App"
                            class="w-[100%] h-[100] rounded-lg" />
                    </div>
                                        <!-- Left side - Form -->
                    <div class="w-full">
                        <div class="mb-8">
                            <h2 class="font-bold text-white mb-4 text-3xl md:text-5xl md:text-left text-center">
                                <span class="inline-block mb-2 rtl">Early users will get 🎉</span>
                                <span class="inline-block">a free trial and exclusive features</span>
                            </h2>
                            <p class="font-normal text-white text-2xl mb-8 md:text-left text-center">
                                Give your website visitors an easy way to convert or purchase your product or service.
                            </p>
                        </div>

                        <form data-target="firstcome" >
                            <!-- Full Name -->
                            <div class="mb-4 text-left">
                                <label class="font-normal text-white text-base">
                                    *Full Name
                                </label>
                                <div class="mb-2"></div>
                                <input type="text"
                                    name="name"
                                    class="text-left w-full px-4 py-3 rounded-md bg-opacity-20 bg-white text-white border border-white border-opacity-30 focus:outline-none focus:border-opacity-50"
                                    placeholder="*Full Name" />
                            </div>

                            <!-- Email and Phone on same line on desktop -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-left">
                                <!-- Phone Number -->
                                <div>
                                    <label class="font-normal text-white text-base">
                                        *Phone Number
                                    </label>
                                    <div class="mb-2"></div>
                                    <div class="relative">
                                        <input type="tel"
                                            name="phone"
                                            class="w-full px-4 py-3 rounded-md bg-opacity-20 bg-white text-white border border-white border-opacity-30 focus:outline-none focus:border-opacity-50 pr-10 text-left"
                                            placeholder="*Phone Number" />
                                        <img src="/assets/images/saudiArabiaFlag.svg" alt="image"
                                            class="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center"
                                            style="max-height: 25px;" />
                                    </div>
                                </div>

                                <!-- Email -->
                                <div>
                                    <label class="font-normal text-white text-base">
                                        *Email Address
                                    </label>
                                    <div class="mb-2"></div>

                                    <input type="email"
                                     name="email"
                                        class="w-full px-4 py-3 rounded-md bg-opacity-20 bg-white text-white border border-white border-opacity-30 focus:outline-none focus:border-opacity-50 text-left"
                                        placeholder="*Email Address" />
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit"
                                class="w-full bg-[#10002E] hover:bg-black text-white font-extrabold text-base text-center align-middle py-4 px-4 rounded-md transition duration-300 mt-4">
                                Sign me up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'EarlyAdoptersSection'
}
</script>
