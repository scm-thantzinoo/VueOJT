<template>
  <tr class="table-data-row">
    <td class="title" @click="$emit('changeData', book)">{{ book.title }}</td>
    <td class="price">$ {{ book.price }}</td>
    <td class="author">{{ book.author }}</td>
    <td class="date">{{ book.date }}</td>
  </tr>
</template>
    
<style scoped>
@import "@/assets/css/components/book.css";
</style>
    
<script src="@/services/components/book.js"></script>