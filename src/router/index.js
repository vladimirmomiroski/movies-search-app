import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseMoviesView from '../views/BrowseMoviesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse-movies',
      name: 'BrowseMovies',
      component: BrowseMoviesView
    }
  ]
})

export default router
