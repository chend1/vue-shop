<template>
    <div class="tabbar-item" @click="tabbarClick()">
      <!-- <img src="../../assets/img/home.png" alt="">
      <div>首页</div> -->
      <div v-if='!isActive'>
        <slot name="tabbar-img"></slot>
      </div>
      <div v-else>
        <slot name="tabbar-active-img"></slot>
      </div>
      <div :style="{color:fontColor}">
        <slot name="tabbar-title"></slot>
      </div>
    </div>
</template>


<script>
export default {
  name: 'tabbar-item',
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return{
    }
  },
  methods:{
    tabbarClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    fontColor(){
      return  this.$route.path.indexOf(this.path) !== -1 ? this.activeColor : ''
    }
  }
}
</script>

<style scoped>
  .tabbar-item{
    flex: 1
  }
  .tabbar-item img{
    display: block;
    margin: 3px auto;
    width: 24px;
  }
  .tabbar-item div{
    text-align: center;
    font-size: 12px;
  }
  /* .title-active{
    color: #61b9fb;
  } */
</style>