import {createRouter, createWebHistory} from 'vue-router'
//.. in path to the file represents that the file is in the folder outside of this folder, so basically go out of the folder
import About from '../views/About'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
})

export default router