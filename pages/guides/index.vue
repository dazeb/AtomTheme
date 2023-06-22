<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});
</script>

<template>
    <div>
        <GuideHero />
        <LinkGrid />
    </div>
</template>

<style lang="scss">
</style>
