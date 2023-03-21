<script setup>
import ojtHeader from './components/ojtHeader.vue';
import ThirdOjtContent from './components/thirdOjtContent.vue';
import ojtFooter from './components/ojtFooter.vue';

const title = "Welcome My Blog";
</script>

<template>
  <ojt-header :title="title"></ojt-header>
  <third-ojt-content></third-ojt-content>
  <ojt-footer></ojt-footer>
</template>

<style scoped>
</style>
