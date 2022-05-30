import { createRouter, createWebHistory } from 'vue-router'
import { isSignedIn } from '../components/auth/auth';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter (_, __, next) { // Impede usuários não assinados
      if (isSignedIn()) {       // de acessar a página Home.
        next();
        return;
      }
      next('/')
    },
  },
  {
    path: '/',
    name: 'login',   
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/login.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
