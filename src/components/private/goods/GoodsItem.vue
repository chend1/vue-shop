<template>
  <div class="goodsItem">
    <div class="img">
      <img :src="getImg()" alt="" @click="goodsclick" @load="imgLoad">
    </div>
    <div class="title">
      <a>
        {{goodsList.title}}
      </a>
    </div>
    <div class="param">
      <div class="price">{{goodsList.price}}</div>
      <div class="collect"><i class="collect-icon"></i>{{goodsList.cfav}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsList: Object,
      default(){
        return {}
      }
    },
    created(){
    },
    methods: {
      goodsclick(){
        this.$router.push('/details/'+ this.goodsList.iid)
      },
      getImg(){
        if(this.goodsList.hasOwnProperty('showLarge')){
          return this.goodsList.showLarge.img
        } else{
          return this.goodsList.image
        }
      },
      imgLoad(){
        if(this.$route.path.indexOf('/home') >=0){
          this.$bus.$emit('imgLoad')
        }
        if(this.$route.path.indexOf('/details') >=0){
          this.$bus.$emit('detailsImgLoad')
        }
      }
    },
  }
</script>

<style scoped>
.goodsItem .img{
  height: 270px;
}
.goodsItem .img img{
  width: 100%;
  border-radius: 10px
}
.goodsItem .title{
  line-height: 30px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goodsItem .title a{
  color: #666;
}
.param{
  display: flex;
  justify-content: space-between;
}
.price{
  text-align: left;
  color: #ef4562;
}
.collect{
  text-align: right;
  padding-right: 20px;
}
</style>