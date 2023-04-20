<template>
  <div class="container bg-slate-200 pt-8 pb-8">
    <div
      class="w-2/5 mx-auto bg-white bg-opacity-30 rounded-lg shadow-lg px-6 py-8 backdrop-filter backdrop-blur-lg"
    >
      <h2 class="text-2xl font-bold mb-4">User Details</h2>
      <form class="grid grid-cols-2 gap-4">
        <div class="mb-4 select-none">
          <label class="block text-gray-700 font-bold mb-2" for="user_id"
            >User ID</label
          >
          <input
            class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="user_id"
            type="text"
            placeholder="User ID"
            disabled
            v-model="v$.user_id.$model"
          />
          <span
            class="error-msg"
            v-for="(error, index) in v$.user_id.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="username"
            >Username</label
          >
          <input
            class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="username"
            type="text"
            placeholder="Enter Username"
            v-model="v$.username.$model"
          />
          <span
            class="error-msg"
            v-for="(error, index) in v$.username.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Gender</label>
          <div class="flex items-center">
            <input
              class="mr-2 leading-tight"
              type="radio"
              name="gender"
              value="male"
              v-model="v$.gender.$model"
            />
            <label class="text-sm font-medium text-gray-700 mr-4" for="gender"
              >Male</label
            >
            <input
              class="mr-2 leading-tight"
              type="radio"
              name="gender"
              value="female"
              v-model="v$.gender.$model"
            />
            <label class="text-sm font-medium text-gray-700" for="gender"
              >Female</label
            >
          </div>
          <span
            class="error-msg"
            v-for="(error, index) in v$.gender.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email"
            >Email</label
          >
          <input
            class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="email"
            type="email"
            placeholder="Enter Email"
            v-model="v$.email.$model"
          />
          <span
            class="error-msg"
            v-for="(error, index) in v$.email.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="col-span-2 mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="address"
            >Address</label
          >
          <textarea
            class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="address"
            rows="3"
            placeholder="Enter Address"
            v-model="v$.address.$model"
          ></textarea>
          <span
            class="error-msg"
            v-for="(error, index) in v$.address.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <date-of-birth :model="v$" />
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="user_role"
            >User Role</label
          >
          <select
            class="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            id="user_role"
            v-model="v$.role.$model"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
          <span
            class="error-msg"
            v-for="(error, index) in v$.role.$errors"
            :key="index"
            >{{ error.$message }}</span
          >
        </div>
        <div class="col-span-2 flex justify-end" v-if="!isConfirmed">
          <button
            class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            type="button"
            @click.prevent="clearInput"
          >
            Clear
          </button>
          <button
            class="bg-blue-600 disabled:opacity-50 :enabled:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            @click.prevent="isConfirmed = !isConfirmed"
            :disabled="v$.$invalid"
          >
            Confirm
          </button>
        </div>
        <div class="col-span-2 flex justify-end" v-else>
          <button
            class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            type="button"
            @click.prevent="isConfirmed = !isConfirmed"
          >
            Back
          </button>
          <button
            class="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            type="submit"
            @click.prevent="submitForm"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/css/views/new-user.css";
</style>

<script src="@/services/views/new-user.js"></script>