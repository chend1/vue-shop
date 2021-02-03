<template>
  <div class="goodsParam" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="params" v-for="(item,index) in paramsInfo.rule.tables" :key="index">
      <div class="rule" v-for="(item,index) in item" :key="index">
        <div class="rule-list" v-for="(item,index) in item" :key="index">
          <div class="rule-list-item">{{item}}</div>
        </div>
      </div>
    </div>
    <div class="info-warp" v-for="(item,index) in paramsInfo.info.set" :key="index+'10'">
      <div class="info-list" v-for="(item,index) in item" :key="index">
        <div class="info-item">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsParam',
    props:{
      paramsInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goodsParam{
    width: 100%;
    border-bottom: 6px solid #ededed;
  }
  .rule,.info-warp{
    width: 100%;
    display: flex;
  }
  .rule .rule-list{
    flex: 1;
    line-height: 35px;
    padding-left: 10px;
    border-bottom: 1px solid #ececec;
  }
  .info-list{
    line-height: 35px;
    padding-left: 10px;
    border-bottom: 1px solid #ececec;
    font-size: 14px;
  }
  .info-list:nth-child(1){
    flex: 1;
  }
  .info-list:nth-child(2){
    flex: 4;
  }
</style>