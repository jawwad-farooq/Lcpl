import {createRouter, createWebHistory} from 'vue-router';
import HomePage from './components/Home.vue'
import SignUp from './components/SignUp.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'SignUp',
        path: '/signup',
        component: SignUp
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;