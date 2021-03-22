<template>
  <div class="detailsBar">
    <div class="service">
      <div class="img">
        <img src="~assets/img/serve.png" alt="">
      </div>
      <div class="title">客服</div>
    </div>
    <div class="shop">
      <div class="img">
        <img src="~assets/img/shop.png" alt="">
      </div>
      <div class="title">店铺</div>
    </div>
    <div class="collection">
      <div class="img">
        <img src="~assets/img/collection.png" alt="">
      </div>
      <div class="title">收藏</div>
    </div>
    <div class="add" @click="addClick">
      <p>加入购物车</p>
    </div>
    <div class="buy">
      <p>购买</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailsBar',
    methods: {
      addClick(){
        this.$emit('addClick');
        this.$store.dispatch('addClick')
      }
    }
  }
</script>

<style scoped>
.detailsBar{
  display: flex;
  position: fixed;
  height: 49px;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  justify-content: space-between;
  text-align: center;
}
.img img{
  width: 22px;
  height: 22px;
  vertical-align: bottom;
  margin: 5px 0 2px;
}
.service,.shop,.collection{
  width: 16%;
}
.add,.buy{
  width: 26%;
  line-height: 49px;
  font-size: 14px;
}
.add{
  background-color: yellow;
}
.buy{
  background-color: #ff5777;
  color: white;
}
</style>