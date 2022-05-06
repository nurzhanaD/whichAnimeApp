import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '../views/SearchView';
import AboutView from '../views/AboutView';
import RandomView from '../views/RandomView';

const routes = [
  {
    path: '/search',
    name: '',
    component:SearchView
  },
  {
    path: '/about',
    name: '',
    component:AboutView
  },
  {
    path: '/random',
    name: '',
    component:RandomView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
