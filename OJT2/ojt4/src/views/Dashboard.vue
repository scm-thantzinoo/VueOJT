<script setup>
</script>
<template>
    <div class="w-screen py-96 flex justify-center items-center">
        <router-link class="link" to="/ojt-one">OJT Project 1</router-link>
        <router-link class="link" to="/ojt-two">OJT Project 2</router-link>
        <router-link class="link" to="/ojt-three">OJT Project 3</router-link>
        <router-link class="link" to="/books-list">Books List</router-link>
    </div>
</template>
<style scoped>
.link{
    @apply bg-slate-800 text-slate-400 px-8 py-6 rounded-xl shadow-lg cursor-pointer text-2xl hover:text-slate-100 ml-5
}
</style>