<template>
  <div class="navbar-item" :style="{'background-color': navBgc}">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarItem',
  props:{
    navBgc:{
      type: String,
      default: '#fff'
    }
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  .navbar-item{
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 16px;
    box-shadow: 0px 1px 5px 1px #e8e6e6;
  }
  .navbar-item .left,.navbar-item .right{
    width: 60px;
  }
  .navbar-item .center{
    flex: 1;
    text-align: center;
  }
  .navbar-item .center .title{
    color: #333;
    font-family: '微软雅黑';
    letter-spacing: 5px;
    font-weight: 500;
    font-size: 18px;
  }
</style>