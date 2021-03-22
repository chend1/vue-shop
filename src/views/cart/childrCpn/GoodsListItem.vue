<template>
  <div>
    <div class="goodsList" v-for="item in cartItem" :key="item.iid">
      <div class="select">
        <input type="checkbox" class="check" :checked="item.checked" @click="setClick(item.iid)">
      </div>
      <div class="img">
        <img :src="item.img" alt="" @load="imgLoad">
      </div>
      <div class="content">
        <div class="title">
          {{item.title}}
        </div>
        <div class="describe"></div>
        <div class="bottom">
          <div class="price">
            ￥{{item.price}}
          </div>
          <div class="num">
            X{{item.count}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'GoodsListItem',
    props: {
      cartItem: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      setClick(iid){
        this.$store.commit('setClick',iid)
      },
      imgLoad(){
        this.$bus.$emit('cartImgLoad')
      }
    }
  }
</script>
<style scoped>
.goodsList{
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;
  padding: 10px;
  align-items: center;
}
.select{
  width: 10%;
}
.select .check{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ececec;
  outline: none;
  -webkit-appearance:none;
}
.select .check:checked{
  background-image: url('~assets/img/check.png');
  background-size: cover;
}
.img{
  width: 16%;
}
.img img{
  width: 52px;
  height: 64px;
  border-radius: 10px;
}
.content{
  flex: 1;
  margin-left: 10px;
  width: 70%;
}
.content .title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 30px;
  line-height: 30px;
  
}
.bottom{
  display: flex;
  justify-content: space-between;
}
.describe{
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>