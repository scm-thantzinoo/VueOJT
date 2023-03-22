import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Dashboard from '../views/Dashboard.vue';
import NotFound from '../views/NotFound.vue';
import OjtOne from '../views/OjtOne.vue';
import OjtTwo from '../views/OjtTwo.vue';
import OjtThree from '../views/OjtThree.vue';
import Books from '../views/Books.vue';

const routes = [
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/not-found', name: 'Not Found', component: NotFound },
    { path: '/ojt-one', name: 'Ojt One', component: OjtOne },
    { path: '/ojt-two', name: 'Ojt Two', component: OjtTwo },
    { path: '/ojt-three', name: 'Ojt Three', component: OjtThree },
    { path: '/books', name: 'Books', component: Books },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;