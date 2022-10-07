import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/material'
    },
    {
      path: '/material',
      name: 'materialManage',
      component: () => import('@/views/material/index.vue'),
      meta: {
        title: '原料管理'
      }
    },
    {
      path: '/order',
      name: 'orderManage',
      component: () => import('@/views/order/index.vue'),
      meta: {
        title: '订单管理'
      }
    },
    {
      path: '/user',
      name: 'userManage',
      component: () => import('@/views/user/index.vue'),
      meta: {
        title: '用户管理'
      }
    },
    {
      path: '/demo',
      name: 'demoPage',
      component: () => import('@/views/demo/index.vue'),
      meta: {
        title: '测试页面'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
