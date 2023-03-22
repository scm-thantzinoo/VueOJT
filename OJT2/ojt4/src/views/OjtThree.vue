<script setup>
import { ref, watch, computed } from 'vue';

const name = ref("");
const email = ref("");
const url = ref("");
const phone = ref("");
const nameError = ref("");
const emailError = ref("");
const urlError = ref("");
const phoneError = ref("");

const isBtnDisabled = computed(()=>{
    if(name.value != "" && email.value != "" && url.value != "" && phone.value != "")
    {
        if(nameError.value == "" && emailError.value == "" && urlError.value == "" && phoneError.value == ""){
            return false
        }
        return true
    }
    return true
});

watch(name, (newValue) => {
    if(newValue.length){
        nameError.value = /^[A-Za-z ]+$/.test(newValue) ? "" : "Name Error: Please type only characters."
    }else{
        nameError.value = ""
    }
});

watch(email, (newValue) => {
    if(newValue.length){
        emailError.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue) ? "" : "Email Error: Please enter a valid email address."
    }else{
        emailError.value = ""
    }
});
watch(url, (newValue) => {
    if(newValue.length){
        urlError.value = /^(ftp|http|https):\/\/[^ "]+$/.test(newValue) ? "" : "URL Error: Please enter a valid URL."
    }else{
        urlError.value = ""
    }
});
watch(phone, (newValue) => {
    if(newValue != undefined && newValue > 0){
        phoneError.value = /^[789]\d{9}$/.test(newValue) ? "" : "Phone Error: Please enter a valid Phone Number."
    }else{
        phoneError.value = ""
    }
});

function showInputs(){
    alert(`Values are name: ${name.value}, ${email.value}, ${url.value} and ${phone.value}`);
}

function cancel(){
    name.value = "";
    email.value = "";
    url.value = "";
    phone.value = "";
    nameError.value = "";
    emailError.value = "";
    urlError.value = "";
    phoneError.value = "";
}

</script>

<template>
    <div>
        <table>
            <tr>
                <td>Name *</td>
                <td>
                    <input type="text" v-model="name"><br>
                    <span>{{ nameError }}</span>
                </td>
            </tr>
            <tr>
                <td>Email *</td>
                <td>
                    <input type="email" v-model="email"><br>
                    <span>{{ emailError }}</span>
                </td>
            </tr>
            <tr>
                <td>URL *</td>
                <td>
                    <input type="text" v-model="url"><br>
                    <span>{{ urlError }}</span>
                </td>
            </tr>
            <tr>
                <td>Phone Number *</td>
                <td>
                    <input type="number" v-model="phone" min="0"><br>
                    <span>{{ phoneError }}</span>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button @click="cancel">Cancel</button>
                    <button :disabled="isBtnDisabled" @click="showInputs">Confirm</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
div{
    @apply bg-slate-400 py-[10.5vh] px-[15vw] mx-[50px] my-0;
}
table{
    @apply w-full;
}
tr{
    @apply h-20;
}
td{
    @apply text-3xl p-5 text-right;
}
td:has(input){
    @apply text-left w-2/3;
}
td:has(button){
    @apply w-2/3 text-center;
}
button{
    @apply px-4 py-3 text-sm font-semibold tracking-wider uppercase outline-none rounded-lg text-purple-300 bg-purple-800;
}
button:last-child{
    @apply ml-5;
}
button:hover{
 @apply bg-purple-700 text-purple-200;   
}
button:disabled{
    @apply bg-purple-600 text-purple-400;
}
span{
    @apply text-xl text-red-600 tracking-wider;
}
input{
    @apply w-96 border border-slate-500 text-xl px-3 py-2;
}

</style>