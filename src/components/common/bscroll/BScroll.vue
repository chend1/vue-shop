<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  data(){
    return {
      scroll: null
    }
  },
  props:{
    pullUpLoad: {
      type: Boolean,
      default: true
    },
    scrollbar: {
      type: Boolean,
      default: true
    },
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      pullUpLoad: this.pullUpLoad,
      scrollbar: this.scrollbar,
      // pullDownRefresh: true,
    }),
    this.scroll.on('scroll', (position) => {
      //滚动事件，传出滚动距离
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
      //调用一次这个函数，才能触发下一次加载更多。
      window.setTimeout( () => {
        this.scroll.finishPullUp();
      },2000)
    })
  }
}
</script>

<style scoped>
.wrapper{
  height: calc(100% - 42px);
  overflow: hidden;
  background-color: yellow;
}
</style>