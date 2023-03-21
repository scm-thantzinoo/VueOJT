<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const title = "Welcome from Vue OJT";

</script>

<template>
  <Header :title="title"></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>