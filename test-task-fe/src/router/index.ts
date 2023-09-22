import {createRouter, createWebHistory} from 'vue-router'
import TestList from "@/components/TestList.vue";
import TestItem from "@/components/TestItem.vue";
import AuthView from "@/views/AuthView.vue";
import Login from "@/components/Login.vue";
import MainView from "@/views/MainView.vue";

// function guardMyRoute(to, from, next) {
//     let isAuthenticated = false;
//
//     if (localStorage.getItem('LoggedUser'))
//         isAuthenticated = true;
//     else
//         isAuthenticated = false;
//     if (isAuthenticated) {
//         next();
//     } else {
//         next('/login');
//     }
// }
//
// function guardMyAuthRoute(to, from, next) {
//     let isAuthenticated = false;
//
//     if (localStorage.getItem('LoggedUser'))
//         isAuthenticated = true;
//     else
//         isAuthenticated = false;
//     if (!isAuthenticated) {
//         next();
//     } else {
//         next('/test');
//     }
// }

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/test',
            name: 'home',
            component: MainView,
            children: [
                {
                    path: 'list',
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
            component: AuthView,
            children: [
                {
                    path: 'login',
                    component: Login,
                },
            ],
        }
    ]
})

export default router
