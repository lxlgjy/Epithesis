import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/Main'
    // },
    {
      path:'/Main',
      name:'Main',
      component: () => import('../views/Body/Main.vue'),
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:() => import('../views/Body/detail.vue')
    },
    {
      path:'/MyMusic',
      name:'Music',
      component: () => import('../views/Body/MyMusic.vue')
    },
    {
      path:'/list/:id',
      name:'List',
      component:() => import('../views/Body/List.vue')
    },
    {
      path:'/CheckOutTheVIP',
      name:'VIP',
      component: () => import('../views/Body/CheckOutTheVIP.vue')
    },


  ],
})

export default router
