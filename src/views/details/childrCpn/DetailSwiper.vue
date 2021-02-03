<template>
  <div class="homeSwiper">
    <Swiper>
      <SwiperItem v-for="(item,index) in lists" :key="index">
        <div class="img">
          <a :href="item" target="_blank">
            <img :src="item">
          </a>
        </div>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  components:{
    SwiperItem,
    Swiper
  },
  props: {
    lists: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.img{
  height: 300px;
  overflow: hidden;
}
</style>