<script setup>
import Movie from "../components/Movie.vue";
const title = "Welcome from Movies list...";
const movieList = [
  "Mone Swal",
  "ME",
  "Nga Duu",
  "Mystery of Burma",
  "Phoe Shate",
  "Mudras calling",
  "Deception",
];
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <Movie
        v-for="(movie, index) in movieList"
        :key="index"
        :title="movie"
      ></Movie>
    </ul>
  </div>
</template>

<style scoped>
div {
    @apply bg-slate-400 px-[25vw] py-[25vh] mx-[50px] my-0;
}
h2 {
    @apply text-4xl mb-12 text-center;
}
</style>