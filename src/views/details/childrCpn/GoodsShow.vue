<template>
  <div class="goodsShow" v-if="Object.keys(detailInfo).length !== 0">
    <div class="goto">
      <div>进店逛逛</div>
    </div>
    <div class="detail">
      <div class="title-line top"></div>
        <div class="title">{{detailInfo.desc}}</div>
      <div class="title-line btm"></div>
    </div>
    <div class="effect">
      <div class="img-wrap">
        <div v-for="(item,index) in detailInfo.detailImage" :key="index">
          <p class="top">
            {{item.key}}
          </p>
          <div class="img" v-for="(item,index) in item.list" :key="index">
            <img :src="item" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsShow',
  props: {
    detailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      detailImage: []
    }
  },
  computed:{
  },
}
</script>

<style scoped>
.goto{
  width: 100%;
  line-height: 40px;
  margin-top: 20px;
}
.goto div{
  width: 100px;
  line-height: 26px;
  margin: 7px auto;
  text-align: center;
  border-radius: 13px;
  background-color: #f2f2f2;
  font-size: 12px;
}
.detail{
  width: 100%;
  position: relative;
}
.detail .title-line{
  width: 60px;
  height: 1px;
  background-color: #000;
}
.detail .title-line.top{
  margin-left: 5px;
}
.detail .title-line.btm{
  float: right;
  margin-right: 5px;
}
.detail .title-line.top::after{
  content: '';
  width: 5px;
  height: 5px;
  position: absolute;
  top: -2.5px;
  left: 5px;
  background-color: #000;
}
.detail .title-line.btm::after{
  content: '';
  width: 5px;
  height: 5px;
  position: absolute;
  bottom: -2.5px;
  background-color: #000;
  right: 5px;
}
.detail .title{
  line-height: 25px;
  box-sizing: border-box;
  padding: 10px;
  font-size: 14px;
}
.effect .top{
  line-height: 30px;
  margin-top: 10px;
  font-size: 16px;
  padding-left: 10px;
}
.img-wrap .img img{
  width: 100%;
}
.effect{
  border-bottom: 4px solid #ededed;
}
</style>