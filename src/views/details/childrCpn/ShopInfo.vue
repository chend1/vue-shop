<template>
  <div class="shopInfo">
    <div class="shop-top">
      <div class="img">
        <img :src="shop.shopLogo" alt="">
      </div>
      <div class="title">
        {{shop.name}}
      </div>
    </div>
    <div class="content">
      <div class="sale">
        <p>{{cSells}}</p>
        <p>总销量</p>
      </div>
      <div class="num">
        <p>{{shop.cGoods}}</p>
        <p>全部宝贝</p>
      </div>
      <div class="evaluate">
        <div v-for="(item,index) in shop.score">
          <span>
            {{item.name}}
          </span>
          <span :class="{'good' : item.isBetter,'bed' : !item.isBetter}">
            {{item.score}}
          </span>
          <span :class="{'good' : item.isBetter,'bed' : !item.isBetter}">
            {{item.isBetter ? '高' : '低'}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shop:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {

    }
  },
  computed:{
    cSells(){
      return (this.shop.cSells/10000).toFixed(1)+ '万'
    }
  },
}
</script>

<style scoped>
  .shop-top{
    width: 100%;
    overflow: hidden;
    line-height: 80px;
    border-bottom: 2px solid #dededd;
    margin-bottom: 20px;
  }
  .shop-top .img {
    float: left;
    border-radius: 50%;
    border: 1px solid #aaa;
    margin-top: 7px;
    margin-left: 10px;
    width: 65px;
    height: 65px;
  }
  .shop-top .img img{
    width: 50px;
    height: 50px;
    display: block;
    margin: 6px auto;
  }
  .shop-top .title{
    font-size: 20px;
    padding-left: 20px;
    float: left;
  }
  .content{
    display: flex;
    text-align: center;
  }
  .sale,.num{
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
  }
  .sale p,.num p{
    width: 100%;
  }
  .sale p:first-child,.num p:first-child{
    font-size: 20px;
  }
  .evaluate{
    flex: 2;
    text-align: left;
    padding-left: 20px;
  }
  .evaluate div{
    overflow: hidden;
  }
  .evaluate span{
    display: block;
    float: left;
    padding-left: 10px;
  }
  .evaluate span:nth-child(2){
    width: 34px;
  }
  .good{
    color: red;
  }
  .bed{
    color: teal;
  }
</style>