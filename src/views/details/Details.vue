<template>
  <div class="details">
    <div class="point" v-show="$store.state.cartPoint">
      <div>添加成功</div>
    </div>
    <Navbar class="details-nav">
      <NavbarItem>
        <img src="~assets/img/fanhui.png" alt="" class="img" slot="left" @click="backClick">
        <div class="nav-list" slot="center">
          <ul>
            <li v-for="(item,index) in navList" :key="index" class="list" :class="{ 'active' : index===isActive}" @click="itemClick(index)">
              {{item}}
            </li>
          </ul>
        </div>
      </NavbarItem>
    </Navbar>
    <BScroll :pullUpLoad=true :scrollbar=true ref="detailsScroll" class="content" @scroll="onScroll">
      <!-- 轮播图 -->
      <DetailSwiper :lists="detailBanner"></DetailSwiper>
      <!-- 商品信息 -->
      <GoodsInfo :goods="goods"></GoodsInfo>
      <!-- 店铺信息 -->
      <ShopInfo :shop="shop"></ShopInfo>
      <!-- 商品展示 -->
      <GoodsShow :detailInfo="detailInfo"  @imgLoad="goodsImgLoad"></GoodsShow>
      <!-- 商品参数 -->
      <GoodsParam :paramsInfo="paramsInfo" ref="goodsParam"></GoodsParam>
      <!-- 用户评论 -->
      <Comments :CommentInfo="commentInfo" ref="common"></Comments>
      <!-- 商品推荐 -->
      <RecommendGoods :goods="recommendGoods" ref="recommend"></RecommendGoods>
    </BScroll> 
    <DetailsBar @addClick="addClick"></DetailsBar>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import NavbarItem from 'components/common/navbar/children/NavbarItem'
import BScroll from 'components/common/bscroll/BScroll'
import DetailSwiper from 'views/details/childrCpn/DetailSwiper'
import GoodsInfo from 'views/details/childrCpn/GoodsInfo'
import ShopInfo from 'views/details/childrCpn/ShopInfo'
import GoodsShow from 'views/details/childrCpn/GoodsShow'
import GoodsParam from 'views/details/childrCpn/GoodsParam'
import Comments from 'views/details/childrCpn/Comments'
import RecommendGoods from 'views/details/childrCpn/RecommendGoods'
import DetailsBar from 'views/details/childrCpn/DetailsBar'


import {getDetails,Goods,Shop,getRecommend} from 'network/details'
import {debounce} from '@/common/untils'
export default {
  name: 'Details',
  components: {
    Navbar,
    NavbarItem,
    BScroll,
    DetailSwiper,
    GoodsInfo,
    ShopInfo,
    GoodsShow,
    GoodsParam,
    Comments,
    RecommendGoods,
    DetailsBar
  },
  data(){
    return {
      iid: null,
      navList: ['商品','参数','评论','推荐'],
      //1.获取顶部banner
      detailBanner: [],
      // 商品详情
      goods: {},
      // 店铺详情
      shop: {},
      // 图片展示
      detailInfo: {},
      //商品参数
      paramsInfo: {},
      // 用户评论
      commentInfo: {},
      // 推荐商品
      recommendGoods: [],
      itemImgLister: null,
      isActive: 0,
      itemHeight: [],
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    //请求商品详情数据
    getDetails(this.iid).then( (res) => {
      //1.获取顶部banner
      this.detailBanner = res.data.result.itemInfo.topImages;
      this.goods = new Goods(res.data.result.itemInfo,res.data.result.columns,res.data.result.shopInfo);
      this.shop = new Shop(res.data.result.shopInfo);
      this.detailInfo = res.data.result.detailInfo;
      this.paramsInfo = res.data.result.itemParams;
      this.commentInfo = res.data.result.rate
    })
    // 请求推荐数据
    getRecommend().then( res => {
      this.recommendGoods = res.data.data.list
    })
  },
  methods: {
    backClick(){
      this.$router.push('/home')
    },
    itemClick(index){
      this.$refs.detailsScroll.scrollTo(0, -this.itemHeight[index], 300)
    },
    // 滚动事件
    onScroll(position){
      const positionY = -(position.y);
      let _lenth = this.itemHeight.length;
      for(let i=0; i<_lenth-1; i++){
        if(this.isActive !== i && (positionY >= this.itemHeight[i] && positionY < this.itemHeight[i+1])){
          this.isActive = i;
        }
      }
    },
    // 各板块的高度
    goodsImgLoad(){
      this.$refs.detailsScroll.refresh();
      // 先清空
      this.itemHeight = [];
      this.itemHeight.push(0);
      this.itemHeight.push(this.$refs.goodsParam.$el.offsetTop);
      this.itemHeight.push(this.$refs.common.$el.offsetTop);
      this.itemHeight.push(this.$refs.recommend.$el.offsetTop);
      this.itemHeight.push(Number.MAX_VALUE);
    },
    // 购物车点击事件
    addClick(){
      let goods = {};
      goods.iid = this.iid;
      goods.title = this.goods.title;
      goods.img = this.detailBanner[0];
      goods.price = this.goods.lowNowPrice;
      this.$store.commit('addClick',goods)
    }

  },
  mounted(){
    this.itemImgLister =  debounce(
      () => {
        if(this.$refs.detailsScroll){
          this.$refs.detailsScroll.refresh()
        }
      }
    )
    this.$bus.$on('detailsImgLoad',this.itemImgLister)
  },
  beforeDestroy() {
    //取消全局的事件监听
    this.$bus.$off('detailsImgLoad',this.itemImgLister)
  }
}
</script>

<style scoped>
  .details-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .point{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 999;
    line-height: 40px;
    width: 100px;
    background-color: pink;
    text-align: center;
    border-radius: 10px;
  }
  .content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .img{
    width: 28px;
    height: 28px;
    margin: 10px auto 0;
    display: block;
  }
  .nav-list ul{
    display: flex;
  }
  .list{
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  .active{
    color: #ff5777;
  }
</style>