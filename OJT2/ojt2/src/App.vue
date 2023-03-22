<script setup>
import ojtHeader from "./components/ojtHeader.vue";
import secondOjtContent from "./components/secondOjtContent.vue";
import ojtFooter from "./components/ojtFooter.vue";

const title = "Welcome from OJT Project 2";
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
  <ojt-header :title="title"></ojt-header>
  <second-ojt-content :movieList="movieList"></second-ojt-content>
  <ojt-footer></ojt-footer>
</template>
