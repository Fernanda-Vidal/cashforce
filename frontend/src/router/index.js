import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/notas-fiscais',
    name: 'notasFiscais',
    component: () => import('../views/NotasFiscais.vue')
  }, {
    path: '/cedente',
    name: 'cedente',
    component: () => import('../views/CedentesNF.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
