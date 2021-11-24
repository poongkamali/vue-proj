import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: '/',
        name: 'loginpage',
        component: () => import('@/components/Loginpage'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/components/Register'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/components/DashBoard'),
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('@/components/Add'),
    },
]
export default new Router({
    mode: 'history',
    routes: routes,
});