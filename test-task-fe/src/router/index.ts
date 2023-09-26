import {createRouter, createWebHistory} from 'vue-router'
import type {NavigationGuardNext, RouteLocation} from 'vue-router';
import TestList from "@/components/TestList.vue";
import TestItem from "@/components/TestItem.vue";
import AuthView from "@/views/AuthView.vue";
import MainView from "@/views/MainView.vue";
import LoginForm from "@/components/LoginForm.vue";

function guardMyRoute(to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    const isAuthenticated = localStorage.getItem('token');

    if (isAuthenticated) {
        next();
    } else {
        next('/auth/login');
    }
}

function guardMyAuthRoute(to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    const isAuthenticated = localStorage.getItem('token');

    if (!isAuthenticated) {
        next();
    } else {
        next('/test');
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/test',
            name: 'home',
            component: MainView,
            beforeEnter: guardMyRoute,
            children: [
                {
                    path: '/',
                    component: TestList,
                },
                {
                    path: ':id',
                    component: TestItem,
                },
            ],
        },
        {
            path: '/auth',
            name: 'auth',
            beforeEnter: guardMyAuthRoute,
            component: AuthView,
            children: [
                {
                    path: 'login',
                    component: LoginForm,
                },
            ],
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/test/list'
        }
    ]
})

export default router
