<script setup>
import Movie from "./Movie.vue";
defineProps({
  movieList: Array,
});
const title = "Welcome from Movies list...";
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
  background: rgb(148, 147, 148);
  padding: 25vh 25vw;
  margin: 0px 50px;
}
h2 {
  font-size: 60px;
  margin-bottom: 50px;
}
li {
  font-size: 40px;
  list-style-type: disc;
}
</style>