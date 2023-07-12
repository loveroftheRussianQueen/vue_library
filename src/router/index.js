import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/books',
      name: 'books',
      component: HomeView,
      alias: '/'
    },
    {
      path: '/books/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateBook.vue')
    },
    {
      path: '/book/:id/show',
      component: () => import('../views/BookView.vue')
    }
  ]
})

export default router
