import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PageStructure from '../views/PageStructure.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'page-structu',
    component: PageStructure,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/DashboardView.vue')
      },
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
