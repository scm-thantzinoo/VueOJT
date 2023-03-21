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
    { path: '/404', name: '404', component: NotFound },
    { path: '/OjtOne', name: 'OjtOne', component: OjtOne },
    { path: '/OjtTwo', name: 'OjtTwo', component: OjtTwo },
    { path: '/OjtThree', name: 'OjtThree', component: OjtThree },
    { path: '/Books', name: 'Books', component: Books },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;