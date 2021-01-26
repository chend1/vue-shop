<template>
  <div class="homeSwiper">
    <Swiper>
      <SwiperItem v-for="(item,index) in lists" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
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

</style>