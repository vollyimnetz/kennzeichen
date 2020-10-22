import Vue from 'vue'
import VueRouter from 'vue-router'
import Kennzeichen from '../views/Kennzeichen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Kennzeichen
  }
]

const router = new VueRouter({
  routes
})

export default router
