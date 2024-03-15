import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import learning from '../learningfile/learning.vue'
import learninginput from '../learningfile/learninginput.vue'
import learningifelse from '../learningfile/learningifelse.vue'
import learningforloop from '../learningfile/learningforloop.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
    },
    {
      path:'/learning',
      name:'learning',
      component:learning
    },
    {
      path:'/learninginput',
      name:'learninginput',
      component:learninginput
    },
    {
      path:'/learningifelse',
      name:'learningifelse',
      component:learningifelse
    },
    {
      path:'/learningforloop',
      name:'learningforloop',
      component:learningforloop
    }

  ]
})

export default router
