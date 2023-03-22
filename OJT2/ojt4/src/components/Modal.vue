<script setup>
import { ref } from 'vue';

const props = defineProps({
    book: JSON
})

const name = ref(props.book.name);
const price = ref(props.book.price);
const author = ref(props.book.author);
const date = ref(props.book.date);

</script>
<template>
  <div class="modal">
    <input type="text" v-model="name" /><br>
    <input type="number" v-model="price" /><br>
    <input type="text" v-model="author" /><br>
    <input type="date" v-model="date" /><br>
    <div class="btnGroup">
        <button>Cancel</button>
        <button>Confirm</button>
    </div>
  </div>
</template>

<style scoped>
.modal{
    @apply w-1/3 mx-auto flex flex-col mb-5 border shadow-lg px-6 py-4 rounded-lg
}
input{
    @apply border-2 px-3 py-2
}
.btnGroup{
    @apply flex flex-row
}
button{
    @apply px-4 py-3 text-sm font-semibold tracking-wider uppercase outline-none rounded-lg text-purple-300 bg-purple-800;
}
button:last-child{
    @apply ml-3
}
</style>