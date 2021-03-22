<template>
  <div class="cart">
    <Navbar class="cart-nav">
      <NavbarItem navBgc="pink" class="home-nav">
        <div class="title" slot="center">
          购物车<span class="cartNum">({{$store.state.cartLists.length}})</span>
        </div>
      </NavbarItem>
    </Navbar>
    <BScroll :pullUpLoad=true :scrollbar=true ref="cartScroll" class="scroll">
      <!-- 添加的商品列表 -->
      <GoodsList></GoodsList>
    </BScroll>
    
    <!-- 总计 -->
    <BotBar class="botbar"></BotBar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import NavbarItem from 'components/common/navbar/children/NavbarItem'
import BScroll from 'components/common/bscroll/BScroll'
import GoodsList from './childrCpn/GoodsList'
import BotBar from './childrCpn/BotBar'
import {debounce} from '@/common/untils'
export default {
  name: 'Cart',
  components: {
    Navbar,
    NavbarItem,
    BScroll,
    GoodsList,
    BotBar
  },
  data(){
    return {
      itemImgLister: null
    }
  },
  beforeDestroy() {
    //取消全局的事件监听
    this.$bus.$off('cartImgLoad',this.itemImgLister)
  },
  mounted(){
    this.itemImgLister =  debounce(
      () => {
        if(this.$refs.cartScroll){
          this.$refs.cartScroll.refresh()
        }
      }
    )
    this.$bus.$on('cartImgLoad',this.itemImgLister)
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
    overflow: hidden;
  }
.cartNum{
  font-size: 16px;
}
.botbar{
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
}
.cart-nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.scroll{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 91px;
  overflow: hidden;
}
</style>