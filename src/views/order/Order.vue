<template>
  <div class="category">
    <div class="aside">
      <BScroll class="content" :pullUpLoad=true>
        <Aside :asideLists='lists' @listClick="asideClick"></Aside>
      </BScroll>
    </div>
    <div class="cnt">
      <BScroll class="goodsCnt" :pullUpLoad=true>
        <Category :categoryList="goodsList"></Category>
      </BScroll>
    </div>
  </div>
</template>

<script>
  import Aside from './childCpn/Aside.vue'
  import Category from './childCpn/Category.vue'
  import BScroll from 'components/common/bscroll/BScroll'
  import {getCategory,getSubcategory} from 'network/category'
  export default {
    name: 'Order',
    components: {
      Aside,
      Category,
      BScroll
    },
    data(){
      return{
        lists: [],
        goodsList: []
      }
    },
    methods:{
      asideClick(id){
        console.log(id);
        getSubcategory(id).then( res => {
          this.goodsList = res.data.data.list
          console.log(this.goodsList);
        })
      }
    },
    created(){
      getCategory().then( res => {
        this.lists = res.data.data.category.list
        console.log(this.lists);
      }),
      getSubcategory(3627).then( res => {
        this.goodsList = res.data.data.list
      })
    }
  }
</script>

<style scoped>
  .category{
    display: flex;
  }
  .aside{
    width: 100px;
    height: 80vh;
  }
  .content{
    width: 100%;
    height: 80vh;
    overflow: hidden;
  }
  .cnt{
    flex: 1;
  }
  .goodsCnt{
    height: 100vh;
    overflow: hidden;
    padding-bottom: 49px;
    box-sizing: border-box;
  }
</style>