<script setup>
</script>
<template>
    <div class="w-screen py-96 flex justify-center items-center">
        <router-link class="link" to="/OjtOne">OJT Project 1</router-link>
        <router-link class="link" to="/OjtTwo">OJT Project 2</router-link>
        <router-link class="link" to="/OjtThree">OJT Project 3</router-link>
        <router-link class="link" to="/Books">Books List</router-link>
    </div>
</template>
<style scoped>
.link{
    @apply bg-slate-800 text-slate-400 px-8 py-6 rounded-xl shadow-lg cursor-pointer text-2xl hover:text-slate-100 ml-3
}
</style>