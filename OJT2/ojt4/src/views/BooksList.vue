<script setup>
import Book from "../components/Book.vue"
import Modal from "../components/Modal.vue"

const books = [
    {name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019'},
    {name: 'My Serious Love', price: 1500, author: 'Yar Za Koe', date: ''},
    {name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '1/8/2019'},
    {name: 'My Serious Love', price: 1500, author: 'Yar Za Koe', date: ''},
]
const editBook = {name: 'Smooth of Love', price: 2000, author: 'Su Myat Mon Mon', date: '2019-8-1'};
</script>
<template>
    <table>
        <tr>
            <th>Book Name</th>
            <th>Price</th>
            <th>Author</th>
            <th>Date</th>
        </tr>
        <Book v-for="(book, index) in books" :key="index" :book="book" />
    </table>
    <Modal :book="editBook" />
</template>

<style scoped>
table{
    @apply w-1/2 m-auto my-40 rounded-xl shadow-lg bg-slate-900 text-slate-300 text-center
}
tr{
    @apply border-b border-slate-700
}
th{
    @apply px-6 py-4
}
</style>
