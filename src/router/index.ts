import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/tabs/tab1'
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [
            {
                path: '',
                redirect: '/tabs/tab1'
            },
            {
                path: 'home',
                component: () => import('@/views/HomePage.vue')
            },
            {
                path: 'invest',
                component: () => import('@/views/InvestmentPage.vue')
            },
            {
                path: 'savings',
                component: () => import('@/views/SavingsPage.vue')
            },
            {
                path: 'withdraw',
                component: () => import('@/views/WithdrawalPage.vue')
            },
            {
                path: 'profile',
                component: () => import('@/views/ProfilePage.vue')
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
