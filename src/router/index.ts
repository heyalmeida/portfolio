import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import About from '../views/AboutPage.vue' // importa a nova página
import Projects from '../views/ProjectsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
