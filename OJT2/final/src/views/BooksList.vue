<template>
  <div class="books-list-container">
    <div class="books-list-header">
      <h1 class="books-list-title">Books List Menu</h1>
      <button class="create-new-btn" @click="createBook">Create One</button>
    </div>
    <div class="table-background">
      <div class="table-wrapper">
        <table class="w-full table-auto">
          <thead>
            <tr class="table-header-row">
              <th class="table-header">Title</th>
              <th class="table-header">Author</th>
              <th class="table-header">Date</th>
              <th class="table-header">Price</th>
            </tr>
          </thead>
          <tbody class="table-body">
            <Book
              v-for="(book, index) in books"
              :key="index"
              :book="book"
              @changeData="changeBookData"
            />
          </tbody>
        </table>
      </div>
    </div>

    <Modal
      v-if="modalBook"
      :book="modalBook"
      :isNewBook="isNewBook"
      @modalCancel="modalCancel"
      @editBook="editBook"
      @createNewBook="createNewBook"
    />
  </div>
</template>

<style scoped>
@import "@/assets/css/views/books-list.css";
</style>

<script src="@/services/views/books-list.js"></script>