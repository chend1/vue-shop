<template>
  <div id="home">
    <!-- 导航栏 -->
    <Navbar>
      <NavbarItem navBgc="pink" class="home-nav">
        <div class="title" slot="center">购物街</div>
      </NavbarItem>
    </Navbar>
    <TabColumn :filter="filter" @tabClick="tabClick" v-show="isShow" class="tabColumn" ref="tabColumn1"></TabColumn>
    <BScroll :pullUpLoad=true :scrollbar=true ref="scroll" @scroll="onScroll" @pullingUp="pullingUp">
      <!-- 轮播图 -->
      <HomeSwiper :lists="banners.list" @swiperImgLoad="swiperImgLoad"></HomeSwiper>
      <!-- 推荐 -->
      <HomeRecommend :recommendList="recommend"></HomeRecommend>
      <!-- 流行 -->
      <Popular @popImgLoad="popImgLoad"></Popular>
      <!-- 切换栏目 -->
      <TabColumn :filter="filter" @tabClick="tabClick" ref="tabColumn"></TabColumn>
      <!-- 数据展示 -->
      <Goods :goods="goods[goodsIdx].list"></Goods>
    </BScroll>
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
import {debounce} from '@/common/untils'
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
      isShow: false,
      tabColumnHeight: 0,
      itemImgLister: null
    }
  },
  beforeDestroy() {
    //取消全局的事件监听
    this.$bus.$off('imgLoad',this.itemImgLister)
  },
  mounted(){
    this.itemImgLister =  debounce(
      () => {
        if(this.$refs.scroll){
          this.$refs.scroll.refresh()
        }
      }
    )
    this.$bus.$on('imgLoad',this.itemImgLister)
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
      this.goodsIdx = this.tabData[idx];
      this.$refs.tabColumn.tabIndex = idx;
      this.$refs.tabColumn1.tabIndex = idx;
    },
    // 图片加载完成事件
    swiperImgLoad(){
      this.tabColumnHeight = this.$refs.tabColumn.$el.offsetTop;
    },
    popImgLoad(){
      this.tabColumnHeight = this.$refs.tabColumn.$el.offsetTop;
    },
    // 滚动事件
    onScroll(position){
      this.isShow = -position.y >= this.tabColumnHeight;
    },
    // 上拉加载更多
    pullingUp(){
      this.getHomeGoods(this.goodsIdx)
    }
  },
  
}
</script>

<style scoped>
#home{
  height: 100vh;
  box-sizing: border-box;
}
.home-nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tabColumn{
  position: relative;
  top: 44px;
  z-index: 999;
}
.wrapper{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
}
</style>