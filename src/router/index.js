import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'welcome', component: () => import(/* webpackChunkName: "about" */ '../views/welcome.vue') },
  { path: '/detail', name: 'detail', component: () => import(/* webpackChunkName: "about" */ '../views/detail.vue') }
]

const router = new VueRouter({
  routes
})

export default router
