import {createRouter, createWebHistory} from "vue-router";
import Welcome from '../Pages/Welcome.vue'
import Forms from '../Pages/Forms.vue'
const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome,
    },
    {
        path: '/forms',
        name: 'forms',
        component: Forms,
    },
]

const index = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default index
