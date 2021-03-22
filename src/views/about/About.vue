<template>
  <div class="about">
    <div class="top">
      <div class="head">
        <img src="~assets/img/my.png" alt="">
      </div>
      <div class="center">
        <div class="login">登录/注册</div>
        <div class="phone">
          <span>
            <img src="~assets/img/phone.png" alt="">
          </span>
          暂无手机号
        </div>
      </div>
      <div class="right">
        <div class="dir">
        </div>
      </div>
    </div>
    <div class="detail">
      <ul>
        <li>
          <div class="price"> 
            <span class="num">0</span>
            <span>元</span>
          </div>
          <p>我的余额</p>
        </li>
        <li>
          <div class="price">
            <span class="num">0</span>
            <span>个</span>
          </div>
          <p>我的优惠</p>
        </li>
        <li>
          <div class="price">
            <span class="num">0</span>
            <span>分</span>
          </div>
          <p>我的积分</p>
        </li>
      </ul>
    </div>
    <div class="lists two">
      <ul>
        <li>
          <span class="msg"></span>
          我的消息
        </li>
        <li>
          <span class="pointer"></span>
          积分商城
        </li>
        <li>
          <span class="vip"></span>
          会员卡
        </li>
      </ul>
    </div>
    <div class="lists">
      <ul>
        <li>
          <span class="cart"></span>
          我的购物车
        </li>
        <li>
          <span class="app"></span>
          下载购物app
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data(){
      return {}
    }
  }
</script>

<style scoped>
  .top{
    width: 100%;
    height: 100px;
    background-color: #ff5777;
    overflow: hidden;
  }
  .top .head{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    background-color: #f2f2f2;
    margin-top: 15px;
    margin-left: 15px;
  }
  .top .head img{
    width: 70px;
    height: 70px;
    opacity: .3;
  }
  .center,.right{
    float: left;
    margin-top: 15px;
    height: 70px;
    padding-left: 15px;
  }
  .right{
    float: right;
    margin-right: 50px;
  }
  .center .login,.center .phone{
    height: 30px;
    line-height: 30px;
    margin: 2px 0;
    color: #fff3ef;
    font-size: 20px;
  }
  .phone span{
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: bottom;
  }
  .phone span img{
    width: 100%;
  }
  .dir{
    width: 20px;
    height: 20px;
    margin-top: 25px;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    transform: rotateZ(45deg);
  }
  .detail ul{
    overflow: hidden;
    padding: 5px 0 10px;
    border-bottom: 10px solid #eeeeee;
  }
  .detail ul li{
    float: left;
    width: 33.3%;
    text-align: center;
    font-size: 18px;
  }
  .detail ul li>div{
    height: 40px;
    box-sizing: border-box;
    padding-top: 10px;
  }
  .detail ul li>div .num{
    color: #ff6e4e;
  }
  .detail ul li>p{
    line-height: 20px;
  }
  .lists.two ul{
    border-bottom: 10px solid #eee;
  }
  .lists ul li{
    line-height: 45px;
    height: 45px;
    border-bottom: 1px solid #eee;
    padding-left: 10px;
    font-size: 16px;
  }
  .lists ul li span{
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(~assets/img/message.png);
    background-size: 100% 100%;
    margin-top: -1px;
    vertical-align: middle;
  }
  .lists ul li span.pointer{
    background-image: url(~assets/img/pointer.png);
  }
  .lists ul li span.vip{
    background-image: url(~assets/img/vip.png);
  }
  .lists ul li span.cart{
    background-image: url(~assets/img/cart1.png);
  }
  .lists ul li span.app{
    background-image: url(~assets/img/app.png);
  }
</style>