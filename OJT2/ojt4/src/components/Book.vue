<script setup>
defineProps({
  book: JSON,
});
</script>
<template>
    <tr>
        <td>{{ book.name }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.author }}</td>
        <td>{{ book.date }}</td>
    </tr>
</template>

<style scoped>
td{
    @apply px-6 py-3
}
</style>
