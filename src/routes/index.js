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
    redirect: '/todo',
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
  history:
    process.env.NODE_ENV === 'development'
      ? createWebHistory()
      : createWebHashHistory(),
  routes,
})

export default router