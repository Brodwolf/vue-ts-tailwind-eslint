import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PageStructure from '../views/PageStructure.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'page-structure',
    component: PageStructure,
    children: [
      {
        path: '/users',
        name: 'user',
        component: () => import('@/views/users/UsersView.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/DashboardView.vue')
      },
      {
        path: '/',
        name: 'default',
        redirect: '/dashboard'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
