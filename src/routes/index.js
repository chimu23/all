import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import Layout from '@/components/Layout/index.vue'
import vuex from '@/store'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/fire',
    children: [
      {
        path: 'todo',
        name: 'todo',
        component: () => import('@/views/todo/index.vue'),
      },
      {
        path: 'fire',
        name: 'fire',
        component: () => import('@/views/fire/index.vue'),
      },
    ],
  },
]
vuex.commit('route/routeList', routes[0].children)
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
})

export default router
