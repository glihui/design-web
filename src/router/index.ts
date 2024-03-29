import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/power_fitness',
    name: 'power_fitness',
    component: () => import('../views/PowerFitness.vue'),
  },
  {
    path: '/pet',
    name: 'pet',
    component: () => import('../views/Pet.vue'),
  },
  {
    path: '/space',
    name: 'space',
    component: () => import('../views/Space.vue'),
  },
  {
    path: '/iiiustration',
    name: 'iiiustration',
    component: () => import('../views/Iiiustration.vue'),
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('../views/Icon.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(() => {
    window.scrollTo(0,0);
})

export default router
