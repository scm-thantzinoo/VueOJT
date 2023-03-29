<script src="@/services/views/ojt-three.js"></script>

<template>
  <div class="form-background">
    <form class="input-form">
      <div class="input-group">
        <label for="name" class="input-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="input-field"
          placeholder="Enter your name"
          v-model="v$.name.$model"
          autocomplete="off"
        />
        <span
          class="error-msg"
          v-for="(error, index) in v$.name.$errors"
          :key="index"
          >{{ error.$message }}</span
        >
      </div>
      <div class="input-group">
        <label for="email" class="input-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="input-field"
          placeholder="Enter your email"
          v-model="v$.email.$model"
          autocomplete="off"
        />
        <span
          class="error-msg"
          v-for="(error, index) in v$.email.$errors"
          :key="index"
          >{{ error.$message }}</span
        >
      </div>
      <div class="input-group">
        <label for="url" class="input-label">URL</label>
        <input
          type="url"
          id="url"
          name="url"
          class="input-field"
          placeholder="Enter your website URL"
          v-model="v$.url.$model"
          autocomplete="off"
        />
        <span
          class="error-msg"
          v-for="(error, index) in v$.url.$errors"
          :key="index"
          >{{ error.$message }}</span
        >
      </div>
      <div class="input-group">
        <label for="phone" class="input-label">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          class="input-field"
          placeholder="Enter your phone number"
          v-model="v$.phone.$model"
          autocomplete="off"
        />
        <span
          class="error-msg"
          v-for="(error, index) in v$.phone.$errors"
          :key="index"
          >{{ error.$message }}</span
        >
      </div>
      <div class="input-group btn-group">
        <button type="button" class="cancel-btn" @click="clearInput">
          Cancel
        </button>
        <button
          type="submit"
          class="submit-btn"
          :disabled="v$.$invalid"
          @click.prevent="submitForm"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
@import "@/assets/css/views/ojt-three.css";
</style>
