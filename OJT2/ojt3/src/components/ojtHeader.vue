<script setup>
defineProps({
  title: String
})
</script>

<template>
    <h1>{{title}}</h1>
</template>

<style scoped>
h1{
    text-align: center;
    font-size: 30px;
    color: white;
    background: purple;
    padding: 20px 0px;
}
</style>