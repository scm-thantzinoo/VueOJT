<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header></Header>
    <router-view class="grow" />
    <Footer></Footer>
  </div>
</template>