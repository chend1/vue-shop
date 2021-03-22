import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const About = () => import('../views/about/About.vue')
const Order = () => import('../views/order/Order.vue')
const Cart = () => import('../views/cart/Cart.vue')
const error = () => import('../views/err/error404.vue')
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
    component: Order,
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
  },
  {
    path: '/error',
    name: 'error',
    component: error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 错误页面
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { 
    from.name ? next({
      name: from.name
    }) : next('/error'); 
  } else {
    next();
  }
});

export default router
