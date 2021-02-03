<template>
  <div id="home">
    <!-- 导航栏 -->
    <Navbar>
      <NavbarItem navBgc="pink">
        <div class="title" slot="center">购物街</div>
      </NavbarItem>
    </Navbar>
    <!-- <BScroll > -->
      <!-- 轮播图 -->
    <HomeSwiper :lists="banners.list"></HomeSwiper>
    <!-- 推荐 -->
    <HomeRecommend :recommendList="recommend"></HomeRecommend>
    <!-- 流行 -->
    <Popular></Popular>
    <!-- 切换栏目 -->
    <TabColumn :filter="filter" @tabClick="tabClick"></TabColumn>
    <!-- 数据展示 -->
    <Goods :goods="goods[goodsIdx].list"></Goods>
    <!-- </BScroll> -->
  </div> 
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import NavbarItem from 'components/common/navbar/children/NavbarItem'
import BScroll from 'components/common/bscroll/BScroll'
import HomeSwiper from  './childrCpn/HomeSwiper'
import HomeRecommend from  './childrCpn/HomeRecommend'
import Popular from  './childrCpn/Popular'
import TabColumn from 'components/private/tabcolumn/TabColumn'
import Goods from 'components/private/goods/Goods'

// 请求数据
import {getHomeMulitData,getHomeGoods} from "network/home";
export default {
  name: 'Home',
  components: {
    Navbar,
    NavbarItem,
    BScroll,
    HomeSwiper,
    HomeRecommend,
    Popular,
    TabColumn,
    Goods
  },
  data(){
    return {
      banners: [],
      recommend: [],
      filter: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      goodsIdx: 'pop',
      tabData: ['pop','new','sell'],
    }
  },
  mounted(){
    console.log(this.goods)
  },
  created(){
    this.getHomeMulitData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    //获取banner和推荐数据  
    getHomeMulitData(){
      getHomeMulitData().then( res => {
        this.banners = res.data.data.banner;
        this.recommend = res.data.data.recommend.list;
      })
    },
    // 获取商品数据
    getHomeGoods(type){
      let page = this.goods[type].page + 1;
      getHomeGoods(type,page).then( res => {
        this.filter = res.data.data.filter.list;
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1;
      })
    },
    tabClick(idx){
      this.goodsIdx = this.tabData[idx]
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  padding-bottom: 49px;
  /* height: 100vh; */
  /* box-sizing: border-box; */
}
.navbar{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
}

</style>