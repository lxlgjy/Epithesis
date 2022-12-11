import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Body/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: Main
    },
    {
      path:'/Main',
      name:'Main',
      component: Main
    },
    {
      path:'/MyMusic',
      name:'Music',
      component: () => import('../views/Body/MyMusic.vue')
    },
    {
      path:'/CheckOutTheVIP',
      name:'VIP',
      component: () => import('../views/Body/CheckOutTheVIP.vue')
    },


  ],
})

export default router
