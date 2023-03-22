<script setup>
defineProps({
    title: String
})
</script>

<template>
    <li>{{ title }}</li>
</template>

<style scoped>
li{
    @apply list-disc text-2xl tracking-normal leading-10;
}
</style>