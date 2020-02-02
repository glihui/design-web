import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PowerFitness from '../views/PowerFitness.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/power_fitness',
    name: 'power_fitness',
    component: PowerFitness
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
