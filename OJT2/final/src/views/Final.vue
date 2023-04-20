<template>
    <div class="min-h-screen bg-slate-200 flex items-center justify-center flex-col">
        <router-link class="header-link text-white" to="/new-user">Register</router-link>
        <div class="flex flex-col mt-6" v-if="usersList.length">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        User ID</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Username</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Gender</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Address</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        DOB</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Age</th>
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Role</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(user, index) in usersList" :key="index">
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.user_id }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.gender }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.address }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.dob }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.age }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ user.role }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-slate-800 font-bold tracking-wide text-3xl mt-5" v-else>No User yet. Create One</p>
    </div>
</template>

<style scoped>
@import "@/assets/css/views/final.css";
</style>

<script src="@/services/views/final.js"></script>