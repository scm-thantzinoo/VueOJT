<script src="@/services/views/ojt-two.js"></script>

<template>
    <div class="movie-list">
        <h3 class="movie-list-title">{{ movieTitle }}</h3>
        <ul class="movie-list-items">
            <Movie v-for="(movie, index) in moviesList" :key="index" :movie="movie"></Movie>
        </ul>
    </div>
</template>

<style scoped>
@import '@/assets/css/views/ojt-two.css';
</style>
