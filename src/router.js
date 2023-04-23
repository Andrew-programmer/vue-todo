import Home from "@/views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes= [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: () => import('@/views/Todos.vue')
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
