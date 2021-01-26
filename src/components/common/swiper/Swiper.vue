<template>
  <div id="cd-Swiper">
    <div class="swiper">
    <slot></slot>
    </div>
    <div class="point">
      <ol>
        <li></li>
      </ol>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Swiper',
  props: {
    animationTime: {
      type: Number,
      default: 2000
    }
  },
  data(){
    return{
      slideNum: 0, //轮播的元素个数
      swiperWhite: 0, //轮播图宽度
      swiperStyle: {}, //轮播样式
      slideIndex: 0, //展示的是哪一个元素
      scrollType: false, //图片是否在滚动
    }
  },
  mounted(){
    // console.log(this.slideNum)
    setTimeout( () => {
      this.handleDom();
      this.startTimer();
    },100)
  },
  methods:{
    startTimer(){ 
      this.timer = window.setInterval( () => {
        this.slideIndex++;
        this.scrollContent(-this.slideIndex*this.swiperWhite)
      },this.animationTime)
    },
    //图片轮播之前的准备
    handleDom(){
      //获取需要操作的dom元素
      let swiper = document.querySelector('.swiper');
      let swiperItem = document.querySelectorAll('.slide');
      //轮播的元素个数
      this.slideNum = swiperItem.length;
      if(this.slideNum > 1){
        //实现无缝轮播在元素前后各复制一个轮播元素
        let firstSlide = swiperItem[0].cloneNode(true);
        let lastSlide = swiperItem[this.slideNum-1].cloneNode(true);
        swiper.insertBefore(lastSlide, swiperItem[0]);
        swiper.appendChild(firstSlide);
        //轮播的元素宽度
        this.swiperWhite = swiper.offsetWidth;
        //轮播样式
        this.swiperStyle = swiper.style;
        // this.slideIndex++;
      }
      // 让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.swiperWhite);
    },
    //设置动画滚动位置
    setTransform(position){
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform']= `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px, 0, 0)`;
    },
    //改变滚动的位置
    changePosition(){
      // 1.校验正确的位置
      // window.setTimeout( () => {
        this.swiperStyle.transition = 'transform '+ '0ms';
        if(this.slideIndex >= this.slideNum+1){
          this.slideIndex = 1;
          this.setTransform(-this.slideIndex * this.swiperWhite);
        } else if (this.slideIndex <= 0) {
          this.slideIndex = this.slideNum;
          this.setTransform(-this.slideIndex * this.swiperWhite);
        }
      // },this.animationTime)
    },
    //开始滚动
    scrollContent(scrollPosition){
      // 设置滚动状态
      this.scrollType = true;
      //设置动画时间
      this.swiperStyle.transition = 'transform '+ this.animationTime + 'ms';
      this.setTransform(scrollPosition);
      //判断滚动到的位置
      this.changePosition();
      //滚动完成
      this.scrolling = false
    }
  }
}
</script>

<style scoped>
#cd-Swiper{
  position: relative;
  overflow: hidden;
}
.swiper{
  display: flex;
}
</style>