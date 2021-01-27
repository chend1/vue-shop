<template>
  <div class="home">
    <!-- 导航栏 -->
    <Navbar>
      <NavbarItem>
        <div class="title" slot="center">首页</div>
      </NavbarItem>
    </Navbar>
    <!-- 轮播图 -->
    <HomeSwiper :lists="banners.list"></HomeSwiper>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'
import NavbarItem from 'components/common/navbar/children/NavbarItem'
import HomeSwiper from  './childrCpn/HomeSwiper'

import {request} from 'network/request'
export default {
  name: 'Home',
  components: {
    Navbar,
    NavbarItem,
    HomeSwiper
  },
  data(){
    return {
      banners: [],
      recommend: []
    }
  },
  created(){
    request({
      url: '/home/multidata'
    })
    .then( res => {
      this.banners = res.data.data.banner;
      console.log(res.data)
    })
    .catch( err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>


</style>