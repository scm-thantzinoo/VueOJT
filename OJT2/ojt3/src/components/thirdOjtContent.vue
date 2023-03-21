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
                <td>
                    <button>Cancel</button>
                </td>
                <td>
                    <button :disabled="isBtnDisabled" @click="showInputs">Confirm</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
div{
    
    background: rgb(148, 147, 148);
    padding: 25.5vh 30vw;
    margin: 0px 50px;
}
td{
    font-size: 30px;
    padding: 20px;
}
td:has(button){
    text-align: center;
}
button{
    padding: 10px 15px;
    font-size: 20px;
    outline: none;
    border-radius: 15px;
    color: white;
    background: purple;
}
button:disabled{
    background: rgb(150, 134, 150);
}
span{
    font-size: 20px;
    color: red;
    letter-spacing: 1.2px;
}
input{
    width: 250px;
    height: 32px;
    border: 1px solid rgb(90, 90, 90);
}

</style>