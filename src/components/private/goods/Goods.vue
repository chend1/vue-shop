<template>
  <div class="goods">
    <GoodsItem v-for="(item,index) in goods" :key="index" :goodsList="item"></GoodsItem>
  </div>
</template>

<script>
import GoodsItem from 'components/private/goods/GoodsItem'
export default {
  name: 'Goods',
  props: {
    goods: Array,
    default(){
      return []
    }
  },
  components:{
    GoodsItem
  }
}
</script>

<style scoped>
.goods{
  width: 100%;
  overflow: hidden;
}
.goods .goodsItem{
  width: 48%;
  margin: 5px 1%;
  float: left;
}
</style>