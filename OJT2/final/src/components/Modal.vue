<template>
  <div
    class="modal-container"
  >
    <div
      class="modal-wrapper"
    >
      <h2 class="modal-title">Edit Book Detail</h2>

      <form class="form-div">
        <div class="input-div">
          <label for="title" class="modal-input-label">Title</label>
          <input
            type="text"
            id="title"
            class="modal-input"
            placeholder="Title"
            required
            v-model="book.title"
          />
        </div>
        <div class="input-div">
          <label for="price" class="modal-input-label">Price</label>
          <input
            type="number"
            id="price"
            class="modal-input"
            placeholder="Price"
            required
            step="0.01"
            v-model="book.price"
          />
        </div>
        <div class="input-div">
          <label for="author" class="modal-input-label">Author</label>
          <input
            type="text"
            id="author"
            class="modal-input"
            placeholder="Author"
            required
            v-model="book.author"
          />
        </div>
        <div class="input-div">
          <label for="date" class="modal-input-label">Date</label>
          <input
            type="date"
            id="date"
            class="modal-input"
            placeholder="Date"
            required
            v-model="book.date"
          />
        </div>
        <div class="modal-btn-group">
            <button class="modal-cancel-btn" @click.prevent="$emit('modalCancel')">Cancel</button>
            <button type="submit" class="modal-submit-btn" @click.prevent="$emit('modalSubmit', book)">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/css/components/modal.css";
</style>
    
<script src="@/services/components/modal.js"></script>