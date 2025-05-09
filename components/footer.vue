<template>
    <footer class="bg-[#0A1F33] text-white py-8">
        <div class="container mx-auto px-4">
            <!-- Top section with logo and social icons -->
            <div
                class="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between md:items-center mb-8 gap-6">
                <!-- Socials -->


                <!-- Logo -->
                <div class="flex justify-center md:justify-start">
                    <img src="/assets/images/autoMateFooter.svg" alt="nemraLogo" class="w-40 md:w-32" />
                </div>
                <div class="flex flex-col items-center md:items-end">
                    <span class="text-lg font-bold mb-4 text-center md:text-left">Follow us</span>
                    <div class="flex space-x-6 :space-x-reverse">
                        <a href="" class="hover:opacity-75 transition">
                            <img src="/assets/icons/linkedin.svg" alt="linkedinLogo" />
                        </a>
                        <a href="" class="hover:opacity-75 transition">
                            <img src="/assets/icons/instagram.svg" alt="instagramLogo" />
                        </a>
                        <a href="" class="hover:opacity-75 transition">
                            <img src="/assets/icons/facebook.svg" alt="facebookLogo" />
                        </a>
                        <a href="" class="hover:opacity-75 transition">
                            <img src="/assets/icons/twitter.svg" alt="twitterLogo" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-[#FCFAFF] my-4"></div>

            <!-- Bottom section with links and copyleft -->
            <div class="flex flex-col-reverse md:flex-row justify-between items-center mt-4 gap-4 text-sm">
                <div class="flex space-x-6 :space-x-reverse">
                    <a href="#" class="hover:opacity-75 transition underline">Privacy Policy</a>
                    <a href="#" class="hover:opacity-75 transition underline">Terms of Service</a>
                </div>

                <div class="text-center md:text-left">
                    © 2025 Automate — All rights reserved
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>
