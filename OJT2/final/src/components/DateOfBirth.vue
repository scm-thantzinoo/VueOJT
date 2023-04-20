<template>
    <div class="flex items-center">
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date_of_birth">Date of Birth</label>
            <input
                class="px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mr-2"
                id="date_of_birth" type="date" placeholder="YYYY-MM-DD" v-model="$props.model.dob.$model" :max="maxDate" />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="age">Age</label>
            <input
                class="w-2/3 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                id="age" type="text" placeholder="Age" v-model="user_age" disabled />
        </div>
        <span class="error-msg" v-for="(error, index) in $props.model.dob.$errors" :key="index">{{ error.$message }}</span>
    </div>
</template>
<style scoped>
@import "@/assets/css/components/date-of-birth.css";
</style>
    
<script src="@/services/components/date-of-birth.js"></script>