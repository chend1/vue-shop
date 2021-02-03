<template>
  <div class="home-recommend">
    <Recommend v-for="(item,index) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </Recommend>
  </div>
</template>

<script>
import Recommend from 'components/private/recommend/Recommend'
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    Recommend,
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.home-recommend{
  display: flex;
}
</style>