import {createRouter, createWebHistory} from 'vue-router'
//.. in path to the file represents that the file is in the folder outside of this folder, so basically go out of the folder
import About from '../views/About'
import Home from '../views/Home'
import Login from '../views/Login'
import SignUp from '../views/SignUp'

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
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Sign Up',
        component: SignUp
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
})

export default router