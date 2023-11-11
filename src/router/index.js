import { createRouter, createWebHistory } from 'vue-router'
import splashView from '@/views/splashView.vue'
import HomeView from '@/views/HomeView.vue'
const routes = [
  {
    path:'/home',
    name:'Home',
    component:HomeView
  },
  {
    path: '/',
    name: 'splashView',
    component: splashView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
