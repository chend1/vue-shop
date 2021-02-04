<template>
  <div class="popular">
    <img src="~assets/img/recommend_bg.jpg" alt="" @load="popImgLoad">
  </div>
</template>

<script>
export default {
  name: 'Popular',
  data(){
    return {  

    }
  },
  methods: {
    popImgLoad(){
      this.$emit('popImgLoad')
    }
  }
}
</script>

<style scoped>
.popular img{
  width: 100%;
}
</style>