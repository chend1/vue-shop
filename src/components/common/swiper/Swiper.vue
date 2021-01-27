<template>
  <div id="cd-Swiper">
    <div class="swiper" @touchstart="touchstar" @touchmove="touchmove" @touchend="touchend">
    <slot></slot>
    </div>
    <div class="point" v-if="showPoint && slideNum>1">
      <ol>
        <li v-for="(item, index) in slideNum" class="idx-item" :style="slideIndex === index+1 ? pointStyle : '' " :key="index">{{index+1}}</li>
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
      default: 300
    },
    interval: {
      type: Number,
      default: 3000
    },
    showPoint: {
      type: Boolean,
      default: true
    },
    pointColor: {
      type: String,
      default: 'red'
    },
    moveRatio: {
      type: Number,
      default: 0.3
    }
  },
  data(){
    return{
      slideNum: 0, //轮播的元素个数
      swiperWhite: 0, //轮播图宽度
      swiperStyle: {}, //轮播样式
      slideIndex: 1, //展示的是哪一个元素
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
      },this.interval)
    },
    stopTimer(){
      window.clearInterval(this.timer);
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
      window.setTimeout( () => {
        if(this.slideIndex >= this.slideNum+1){
          this.swiperStyle.transition = 'transform '+ '0ms';
          this.slideIndex = 1;
          this.setTransform(-this.slideIndex * this.swiperWhite);
        } else if (this.slideIndex <= 0) {
          this.slideIndex = this.slideNum;
          this.setTransform(-this.slideIndex * this.swiperWhite);
        }
      },this.animationTime)
    },
    //开始滚动
    scrollContent(scrollPosition){
      // 设置滚动状态
      this.scrollType = true;
      //设置动画时间
      this.swiperStyle.transition = 'transform '+ ' '+this.animationTime + 'ms';
      this.setTransform(scrollPosition);
      //判断滚动到的位置
      this.changePosition();
      //滚动完成
      this.scrolling = false
    },
    //触摸事件
    touchstar(e){
      if(this.scrolling){
        return;
      }
      // 停止定时器
      this.stopTimer();
      //记录接触的位置坐标
      this.startX = e.touches[0].pageX;
    },
    //移动事件
    touchmove(e){
      // 记录移动的位置坐标
      this.scrollX = e.touches[0].pageX;
      this.distance = this.scrollX-this.startX;
      // 记录图片滚动位置
      let scrPositon = -this.slideIndex*this.swiperWhite;
      //改变的位置
      let scrollP = this.distance + scrPositon;
      this.setTransform(scrollP)
    },
    //离开事件
    touchend(e){
      // 获取移动的距离
      let currentMove = Math.abs(this.distance);
      // 判断最终的距离
      if (this.distance === 0) {
        return;
      } else if (this.distance > 0 && currentMove > this.swiperWhite * this.moveRatio) { // 右边移动超过0.3
        this.slideIndex--
      } else if (this.distance < 0 && currentMove > this.swiperWhite * this.moveRatio) { // 向左移动超过0.3
        this.slideIndex++
      }
      //移动到对应位置
      this.scrollContent(-this.slideIndex*this.swiperWhite);
      // 移动结束，开启定时器
      this.startTimer()
    }
  },
  computed:{
    pointStyle(){
      return {'background-color': this.pointColor}
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
.point{
  position: absolute;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
}
.point ol{
  overflow: hidden;
}
.point .idx-item{
  width: 8px;
  height: 8px;
  margin: 0 5px;
  float: left;
  font-size: 0;
  border-radius: 50%;
  background-color: #fff;
}

</style>