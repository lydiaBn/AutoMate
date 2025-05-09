<template>
  <nav class="fixed top-0 left-0 w-full h-[67px] bg-[#0A1F33] shadow-sm flex items-center justify-center z-50 border-b-[1px] border-[#DBDBDB]">
    <NuxtLink to="/" class="flex items-center">
      <img src="/assets/images/autoMateLogo.svg" alt="autoMateLogo" />
    </NuxtLink>
  </nav>
</template>
<script>
export default {
    name: 'NavBar',
}
</script>