<template>
  <div class="details">
    <Navbar>
      <NavbarItem>
        <img src="~assets/img/fanhui.png" alt="" class="img" slot="left" @click="backClick">
        <div class="nav-list" slot="center">
          <ul>
            <li v-for="(item,index) in navList" :key="index" class="list">
              {{item}}
            </li>
          </ul>
        </div>
      </NavbarItem>
    </Navbar>
    <!-- 轮播图 -->
    <DetailSwiper :lists="detailBanner"></DetailSwiper>
    <!-- 商品信息 -->
    <GoodsInfo :goods="goods"></GoodsInfo>
    <!-- 店铺信息 -->
    <ShopInfo :shop="shop"></ShopInfo>
    <!-- 商品展示 -->
    <GoodsShow :detailInfo="detailInfo"></GoodsShow>
    <!-- 商品参数 -->
    <GoodsParam :paramsInfo="paramsInfo"></GoodsParam>
    <!-- 用户评论 -->
    <Comments :CommentInfo="commentInfo"></Comments>
    <!-- 商品推荐 -->
    <RecommendGoods :goods="recommendGoods"></RecommendGoods>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import NavbarItem from 'components/common/navbar/children/NavbarItem'
import DetailSwiper from 'views/details/childrCpn/DetailSwiper'
import GoodsInfo from 'views/details/childrCpn/GoodsInfo'
import ShopInfo from 'views/details/childrCpn/ShopInfo'
import GoodsShow from 'views/details/childrCpn/GoodsShow'
import GoodsParam from 'views/details/childrCpn/GoodsParam'
import Comments from 'views/details/childrCpn/Comments'
import RecommendGoods from 'views/details/childrCpn/RecommendGoods'


import {getDetails,Goods,Shop,getRecommend} from 'network/details'
export default {
  name: 'Details',
  components: {
    Navbar,
    NavbarItem,
    DetailSwiper,
    GoodsInfo,
    ShopInfo,
    GoodsShow,
    GoodsParam,
    Comments,
    RecommendGoods
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
      recommendGoods: []
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
      console.log(res.data.data.list)
    })
  },
  methods:{
    backClick(){
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
  .details{
    position: relative;
    z-index: 9999;
    background-color: #fff;
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
</style>