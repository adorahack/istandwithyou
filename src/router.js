import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/opinions',
      name: 'opinions',
      component: () => import('./views/Opinions.vue')
    },
    {
      path: '/results',
      name: 'results',
      component: () => import('./views/Results.vue')
    },
    {
      path: '/vote/:id',
      name: 'vote',
      component: () => import('./views/WhyVote.vue')
    }
  ]
})
