<template>
  <div class="final-body">
    <div class="final-btn-group">
      <div>
        <router-link class="header-link text-white" to="/new-user"
          >+ Register</router-link
        >
      </div>
      <div class="verticle-divider" v-if="usersList.length < 3"></div>
      <div class="add-user-btn-group" v-if="usersList.length < 3">
        <p class="add-user-title">or save Time and</p>
        <button class="add-user-btn" @click="createRandomUsers">
          Add 3 Users
        </button>
      </div>
    </div>
    <div class="final-table" v-if="usersList.length">
      <div class="final-table-wrapper-1">
        <div class="final-table-wrapper-2">
          <div class="final-table-wrapper-3">
            <table class="final-table-main">
              <thead class="final-table-head">
                <tr>
                  <th scope="col" class="final-table-head-cell">User ID</th>
                  <th scope="col" class="final-table-head-cell">Username</th>
                  <th scope="col" class="final-table-head-cell">Gender</th>
                  <th scope="col" class="final-table-head-cell">Email</th>
                  <th scope="col" class="final-table-head-cell">Address</th>
                  <th scope="col" class="final-table-head-cell">DOB</th>
                  <th scope="col" class="final-table-head-cell">Age</th>
                  <th scope="col" class="final-table-head-cell">Role</th>
                </tr>
              </thead>
              <tbody class="final-table-body">
                <tr v-for="(user, index) in usersList" :key="index">
                  <td class="final-table-data-cell">
                    {{ user.user_id }}
                  </td>
                  <td class="final-table-data-cell">
                    {{ user.username }}
                  </td>
                  <td class="final-table-data-cell capitalize">
                    {{ user.gender }}
                  </td>
                  <td class="final-table-data-cell">{{ user.email }}</td>
                  <td class="final-table-data-cell">
                    {{ user.address }}
                  </td>
                  <td class="final-table-data-cell">{{ user.dob }}</td>
                  <td class="final-table-data-cell">{{ user.age }}</td>
                  <td class="final-table-data-cell capitalize">
                    {{ user.role }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <p class="final-no-user" v-else>No User yet.</p>
  </div>
</template>

<style scoped>
@import "@/assets/css/views/final.css";
</style>

<script src="@/services/views/final.js"></script>