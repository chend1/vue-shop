import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const About = () => import('../views/about/About.vue')
const Order = () => import('../views/order/Order.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Details = () => import('../views/details/Details.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/details/:iid',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
