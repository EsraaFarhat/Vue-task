import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomeComponent from './components/HomeComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
import ErrorComponent from './components/ErrorComponent.vue'

const routes = [
    { path: '/login', component: LoginComponent },
    { path: '/welcome', component: HomeComponent },
    { path: '/404', component: ErrorComponent },
    { path: '/:catchAll(.*)', redirect: '/404' },
];

const router = createRouter({ history: createWebHistory(), routes });

createApp(App).use(router).mount('#app')
