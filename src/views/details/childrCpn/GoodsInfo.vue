<template>
  <div class="goodsInfo">
    <div class="title">
      <p>{{goods.title}}</p>
    </div>
    <div class="price">
      <div class="range">{{goods.price}}</div>
      <div class="discount">{{goods.discountDesc}}</div>
    </div>
    <div class="collection">
      <div v-for="(item,index) in goods.columns" :key="index" class="columns">{{item}}</div>
    </div>
    <div class="services">
      <div v-for="(item,index) in goods.services" :key="index">
        <img :src="item.icon" alt="">
        <span>
          {{item.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsInfo',
  props: {
    goods:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      columns: [],
      detailImage: []
    }
  },
  created(){
  },
  mounted(){
  }
}
</script>

<style scoped>
.title{
  width: 100%;
  padding: 15px 10px 10px;
  font-size: 14px;
  box-sizing: border-box;
}
.price{
  box-sizing: border-box;
  padding: 0 10px 10px;
  overflow: hidden;
}
.range{
  color: #ff5777;
  font-size: 16px;
  float: left;
}
.discount{
  border-radius: 10px;
  padding: 0px 8px;
  background-color: #ff5777;
  color: white;
  font-size: 12px;
  float: left;;
  margin-top: 2px;
  margin-left: 15px;
}
.collection{
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  display: flex;
}
.columns{
  flex: 1;
  line-height: 35px;
  color: #999;
  font-size: 12px;
  padding-left: 10px;
}
.services{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 4px solid #ededed;
}
.services>div{
  line-height: 35px;
  padding-left: 10px;
  padding-right: 5px;
}
.services img{
  width: 12px;
  height: 12px;
}
.services span{
  font-size: 12px;
  color: #333;
}
</style>