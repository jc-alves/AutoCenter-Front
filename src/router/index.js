import { createRouter, createWebHistory } from 'vue-router'
import { isSignedIn } from '../components/auth/auth'
import Home from '../views/Home.vue'
import Estimate from '../components/sale/estimate.vue'
import Product from '../components/registration/product'

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
    children: [

                { path: '/sales',                
                  component:  import(/* webpackChunkName: "sales" */ '../components/sale/sales.vue')
                  
                },
                { path: '/estimate',
                name: 'Estimate',
                component: Estimate
                },
                { path: '/product',
                name: 'Product',
                component: Product
                },
                { path: '/newprovider',                
                component:  import(/* webpackChunkName: "newProvider" */ '../components/registration/provider/newProvider.vue')
                  
                },
                { path: '/newclient',
                component: import(/* webpackChunkName: "newClient" */ '../components/client/newClient.vue')

                }              

                
              ]
    
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
