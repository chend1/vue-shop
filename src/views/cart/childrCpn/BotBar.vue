<template>
  <div class="botbar">
    <div class="left">
      <div class="set">
        <input type="checkbox" class="check">
      </div>
      <div>全部</div>
    </div>
    <div class="content">
      <div class="sum">合计:</div>
      <div class="sumPrice">￥0.00</div>
    </div>
    <div class="right">
      <div class="sum">去结算:</div>
      <div class="num"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BotBar',
    data(){
      return {
        sumPrice: 0
      }
    },
    computed: {
      
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
</style>