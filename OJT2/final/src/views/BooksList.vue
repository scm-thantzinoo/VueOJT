<template>
  <div class="books-list-container">
    <h1 class="books-list-title">Books List Menu</h1>
    <div class="table-background">
      <div class="table-wrapper">
        <table class="w-full table-auto">
          <thead>
            <tr class="table-header-row">
              <th class="table-header">Title</th>
              <th class="table-header">Price</th>
              <th class="table-header">Author</th>
              <th class="table-header">Date</th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr
              class="table-data-row"
              v-for="(book, index) in books"
              :key="index"
            >
              <td class="title">{{ book.title }}</td>
              <td class="price">$ {{ book.price }}</td>
              <td class="author">{{ book.author }}</td>
              <td class="date">{{ book.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/views/books-list.css";
</style>

<script src="@/services/views/books-list.js"></script>