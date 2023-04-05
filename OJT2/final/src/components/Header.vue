<template>
  <div class="header">
      <div class="header-title">
        <router-link to="/">
          <h1>{{ title }}</h1>
        </router-link>
      </div>
      <div class="header-nav">
          <router-link class="header-link" :class="{'active-route': isRoute('/ojt-one')}" to="/ojt-one">OJT One</router-link>
          <router-link class="header-link" :class="{'active-route': isRoute('/ojt-two')}" to="/ojt-two">OJT Two</router-link>
          <router-link class="header-link" :class="{'active-route': isRoute('/ojt-three')}" to="/ojt-three">OJT Three</router-link>
          <router-link class="header-link" :class="{'active-route': isRoute('/books-list')}" to="/books-list">Books List</router-link>
          <router-link class="header-link" :class="{'active-route': isRoute('/final')}" to="/final">Final</router-link>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/components/header.css";
</style>

<script src="@/services/components/header.js"></script>