import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Input = () => import('../components/Input.vue')

const routes = [
  {
    path: '/',
    name: 'Input',
    component: Input
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
