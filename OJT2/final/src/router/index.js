import { createRouter, createWebHistory } from 'vue-router'
import OjtOne from '@/views/OjtOne.vue';
import OjtTwo from '@/views/OjtTwo.vue';
import OjtThree from '@/views/OjtThree.vue';
import BooksList from '@/views/BooksList.vue';

const routes = [
  {path:'/ojt-one', component:OjtOne},
  {path:'/ojt-two', component:OjtTwo},
  {path:'/ojt-three', component:OjtThree},
  {path:'/books-list', component:BooksList}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
