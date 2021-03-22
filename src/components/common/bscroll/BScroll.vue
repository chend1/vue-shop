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
  props: { 
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    scrollbar: {
      type: Boolean,
      default: false
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      pullUpLoad: this.pullUpLoad,
      scrollbar: this.scrollbar,
      click: true
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
  },
  methods: {
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    scrollTo(x, y, time=500){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
  }
}
</script>

<style scoped>

</style>