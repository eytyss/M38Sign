import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
