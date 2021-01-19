import Vue from 'vue'
import VueRouter from 'vue-router'
// const Home = () => import('../views/home/Home.vue')
// const About = () => import('../views/about/About.vue')
// const Order = () => import('../views/order/Order.vue')
// const Cart = () => import('../views/cart/Cart.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/About.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/Order.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/cart/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
