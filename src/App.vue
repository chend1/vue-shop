<template>
  <div id="app">
    <Tabbar>
      <TabbarItem path='/home' activeColor='#61b9fb'>
        <img src="./assets/img/home.png" alt="" slot="tabbar-img">
        <img src="./assets/img/home-active.png" alt="" slot="tabbar-active-img">
        <div slot="tabbar-title">首页</div>
      </TabbarItem>
      <TabbarItem path='/order' activeColor='#61b9fb'>
        <img src="./assets/img/order.png" alt="" slot="tabbar-img">
        <img src="./assets/img/order-active.png" alt="" slot="tabbar-active-img">
        <div slot="tabbar-title">订单</div>
      </TabbarItem>
      <TabbarItem path='/cart' activeColor='#61b9fb'>
        <img src="./assets/img/cart.png" alt="" slot="tabbar-img">
        <img src="./assets/img/cart-active.png" alt="" slot="tabbar-active-img">
        <div slot="tabbar-title">购物车</div>
      </TabbarItem>
      <TabbarItem path='/about' activeColor='#61b9fb'>
        <img src="./assets/img/my.png" alt="" slot="tabbar-img">
        <img src="./assets/img/my-active.png" alt="" slot="tabbar-active-img">
        <div slot="tabbar-title">我的</div>
      </TabbarItem>
    </Tabbar>
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar'
import TabbarItem from './components/tabbar//children/Tabbar-item'
export default {
  name: 'App',
  components:{
    Tabbar,
    TabbarItem
  },
}
</script>
<style scoped>

</style>
