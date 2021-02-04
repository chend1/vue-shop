<template>
  <div class="cart">
    <Navbar>
      <NavbarItem navBgc="pink" class="home-nav">
        <div class="title" slot="center">
          购物车<span class="cartNum">{{'('+$store.state.cartLists.length+')'}}</span>
        </div>
      </NavbarItem>
    </Navbar>
    <!-- 添加的商品列表 -->
    <GoodsList></GoodsList>
    <!-- 总计 -->
    <BotBar></BotBar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import NavbarItem from 'components/common/navbar/children/NavbarItem'
import GoodsList from './childrCpn/GoodsList'
import BotBar from './childrCpn/BotBar'
export default {
  name: 'Cart',
  components: {
    Navbar,
    NavbarItem,
    GoodsList,
    BotBar
  }
}
</script>

<style scoped>
.cartNum{
  font-size: 16px;
}
</style>