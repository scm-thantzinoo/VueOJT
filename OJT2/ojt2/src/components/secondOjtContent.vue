<script setup>
defineProps({
  movieList: Array
})
const title = "Welcome from Movies list...";
</script>

<template>
    <div>
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="(movie, index) in movieList" :key="index">{{ movie }}</li>
        </ul>
    </div>
</template>

<style scoped>
div{
    background: rgb(148, 147, 148);
    padding: 35vh 30vw;
    margin: 0px 50px;
}
h2{
    font-size: 60px;
    margin-bottom: 50px;
}
li{
    font-size: 40px;
    list-style-type: disc;
}
</style>