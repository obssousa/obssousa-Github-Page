import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '../views/ResumeView.vue'

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: ResumeView
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})
export default router
