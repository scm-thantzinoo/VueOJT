<template>
    <div class="min-h-screen bg-slate-200 flex items-center justify-center flex-col">
        <router-link class="header-link" to="/new-user">Register</router-link>
        <p class="text-slate-600 mt-5">Temporary button to go to next route</p>
        <p>{{ usersList }}</p>
    </div>
</template>

<style scoped>
@import "@/assets/css/views/final.css";
</style>

<script src="@/services/views/final.js"></script>