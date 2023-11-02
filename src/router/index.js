import { createRouter, createWebHistory } from 'vue-router'
import DataReview from '@/views/DataReview.vue'
import HomeView from '@/views/HomeView.vue'
const routes = [
  {
    path:'/',
    name:'Home',
    component:HomeView
  },
  {
    path: '/data',
    name: 'DataReview',
    component: DataReview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
