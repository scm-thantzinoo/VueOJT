import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Dashboard from '../views/Dashboard.vue';
import NotFound from '../views/NotFound.vue';
import OjtOne from '../views/OjtOne.vue';
import OjtTwo from '../views/OjtTwo.vue';
import OjtThree from '../views/OjtThree.vue';
import BooksList from '../views/BooksList.vue';

const routes = [
    { path: '/', component: Dashboard },
    { path: '/not-found', component: NotFound },
    { path: '/ojt-one', component: OjtOne },
    { path: '/ojt-two', component: OjtTwo },
    { path: '/ojt-three', component: OjtThree },
    { path: '/books-list', component: BooksList },
    { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;