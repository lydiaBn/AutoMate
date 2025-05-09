<template>
    <section class="mx-auto p-[25px] ">
        <div class="mx-auto md:px-8 container">
            <h2 class="text-center mb-8  font-bold text-4xl md:text-5xl">
                Main Features
            </h2>
            <!-- Feature 1: Easy Financial Recording -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[48px] mb-12 ">
                <div class="order-1 md:order-1 flex justify-center items-center">
                    <img src="~/assets/images/chatting.png" alt="Chatbot Interaction"
                        class="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
                <div class="order-2 md:order-2 flex flex-col justify-center md:mr-10">
                    <h3 class="text-2xl md:text-[40px] font-bold text-center md:text-left mb-4 w-full">
                        User-Friendly Interface
                    </h3>
                    <p class="text-lg md:text-xl font-normal text-center md:text-left w-full">
                        Intuitive design for easy navigation and operation.
                    </p>
                </div>
            </div>

            <!-- Feature 2: Upload Invoices -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[48px] mb-12 ">
                <div class="order-2 md:order-1 flex flex-col justify-center md:mr-10">
                    <h3 class="text-2xl md:text-[40px] font-bold text-center md:text-left mb-4 w-full">
                        Customizable Workflows
                    </h3>
                    <p class="text-lg md:text-[20px] font-normal text-center md:text-left w-full">
                        Tailor automation processes to specific tasks.
                    </p>
                </div>
                <div class="order-1 md:order-2 flex justify-center items-center">
                    <img src="~/assets/images/Workflows.png" alt="Customizable Workflows"
                        class="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </div>

            <!-- Feature 3: Financial Questions -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[48px] mb-12 ">
                <div class="order-1 md:order-1 flex justify-center items-center">
                    <img src="~/assets/images/analytics.png" alt="Financial Questions"
                        class="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
                <div class="order-1 md:order-2 flex flex-col justify-center md:mr-10">
                    <h3 class="text-2xl md:text-[40px] font-bold text-center md:text-left mb-4 w-full">
                        Real-Time Analytics
                    </h3>
                    <p class="text-lg md:text-[20px] font-normal text-center md:text-left w-full">
                        Monitor operations and gain insights instantly.
                    </p>
                </div>
            </div>

            <!-- Feature 4: Learn Accounting Terms -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[48px] mb-12 ">
                <div class="order-2 md:order-1 flex flex-col justify-center md:mr-10">
                    <h3 class="text-2xl md:text-[40px] font-bold text-center md:text-left mb-4 w-full">
                        Secure Data Handling
                    </h3>
                    <p class="text-lg md:text-[20px] font-normal text-center md:text-left w-full">
                        Ensure compliance with data protection regulations.
                    </p>
                </div>
                <div class="order-1 md:order-2 flex justify-center items-center">
                    <img src="~/assets/images/security.jpg" alt="Secure Data"
                        class="rounded-lg shadow-lg max-w-full h-auto" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainFeaturesSection'
}
</script>
