<template>
  <div class="header">
    <h1 class="header-title">{{ title }}</h1>
      <div class="header-nav">
          <router-link class="header-link" to="/ojt-one">OJT One</router-link>
          <router-link class="header-link" to="/ojt-two">OJT Two</router-link>
          <router-link class="header-link" to="/ojt-three">OJT Three</router-link>
          <router-link class="header-link" to="/books-list">Books List</router-link>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/components/header.css";
</style>

<script src="@/services/components/header.js"></script>