<template>
  <div class="modal-container">
    <div class="modal-wrapper">
      <h2 class="modal-title">{{ modalTitle }}</h2>
      <span class="modal-close" @click.prevent="$emit('modalCancel')">
        <svg
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>

      <form class="form-div">
        <div class="input-div">
          <label for="title" class="modal-input-label">Title</label>
          <input
            type="text"
            id="title"
            class="modal-input"
            placeholder="Title"
            required
            v-model="v$.title.$model"
          />
          <span
            class="error-msg"
            v-for="(error, index) in v$.title.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
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
            v-model="v$.price.$model"
          />
          <span
            class="error-msg"
            v-for="(error, index) in v$.price.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="input-div">
          <label for="author" class="modal-input-label">Author</label>
          <input
            type="text"
            id="author"
            class="modal-input"
            placeholder="Author"
            required
            v-model="v$.author.$model"
          />
          <span
            class="error-msg"
            v-for="(error, index) in v$.author.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="input-div">
          <label for="date" class="modal-input-label">Date</label>
          <input
            type="date"
            id="date"
            class="modal-input"
            placeholder="Date"
            required
            v-model="v$.date.$model"
          />
          <span
            class="error-msg"
            v-for="(error, index) in v$.date.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="modal-btn-group">
          <button
            class="modal-cancel-btn"
            @click.prevent="$emit('modalCancel')"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="modal-submit-btn"
            :disabled="v$.$invalid"
            @click.prevent="submitBook"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
@import "@/assets/css/components/modal.css";
</style>
    
<script src="@/services/components/modal.js"></script>