<template>
  <div class="botbar">
    <div class="left">
      <div class="set">
        <input type="checkbox" class="check" @click="setAllClick" checked="isCheck">
      </div>
      <div>全部</div>
    </div>
    <div class="content">
      <div class="sum">合计:</div>
      <div class="sumPrice">{{getPrice}}</div>
    </div>
    <div class="right">
      <div class="sum">去结算:</div>
      <div class="num">({{getLength}})</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BotBar',
    data(){
      return {
        sumPrice: 0,
        isCheck: true
      }
    },
    computed: {
      getPrice(){
        let result = this.$store.state.cartLists.filter( (item) => item.checked);
        let sum = 0
        for(let i=0; i< result.length; i++){
          sum+=result[i].count*result[i].price;
        }
        return '￥'+sum.toFixed(2)
      },
      getLength(){
        return this.$store.state.cartLists.filter( (item) => item.checked).length
      }
    },
    methods: {
      setAllClick(){
        if(this.$store.state.cartLists.length >= 1){
          let result = this.$store.state.cartLists.filter( (item) => !item.checked);
          if(result){
            this.isCheck = false;
          }
        }
      }
    }
  }
</script>

<style scoped>
.botbar{
  display: flex;
  height: 42px;
  line-height: 42px;
  text-align: center;
  align-items: center;
  font-size: 14px;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
}
.botbar>div{
  flex: 1;
}
.left{
  display: flex;
}
.set{
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.check{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #ececec;
  outline: none;
  -webkit-appearance:none;
}
.check:checked{
  background-image: url('~assets/img/check.png');
  background-size: cover;
}
.content,.right{
  display: flex;
  justify-content: center;
}
</style>