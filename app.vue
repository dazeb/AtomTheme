<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import 'vue3-lottie/dist/style.css'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="dark:bg-gray-900 bg-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
