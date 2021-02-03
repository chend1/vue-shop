<template>
  <div class="comments" v-if="Object.keys(CommentInfo).length !== 0">
    <div class="top">
      <div class="title">
        用户评价
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <div class="user-warp">
      <div class="user" v-for="(item,index) in CommentInfo.list" :key="index">
        <div class="user-top">
          <div class="head">
            <img :src="item.user.avatar" alt="">
          </div>
          <div class="name">
            {{item.user.uname}}
          </div>
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="message">
          <div class="time">
            {{item.created | getDate}}
          </div>
          <div class="style">
            {{item.style}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Comments',
    props:{
      CommentInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      getDate(value){
        let time = new Date(value*1000);
        let y = time.getFullYear();
        let M = time.getMonth();
        let d = time.getDate();
        // let h = time.getHours();
        // let m = time.getMinutes();
        // let s = time.getSeconds();
        time = y+'-'+M+'-'+d
        return time
      }
    }
  }
</script>

<style scoped>
  .comments{
    border-bottom: 4px solid #ededed;
  }
.comments .top{
  display: flex;
  justify-content: space-between;
  line-height: 35px;
  border-bottom: 1px solid #ececec;
}
.comments .top .title{
  font-size: 14px;
  padding-left: 10px;
}
.comments .top .more{
  padding-right: 10px;
  font-size: 14px;
}
.user-top{
  display: flex;
  height: 60px;
  justify-items: center;
}
.head img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 10px;
}
.user-top .name{
  line-height: 60px;
  font-size: 14px;
  padding-left: 10px;
}
.content{
  width: 100%;
  box-sizing: border-box;
  padding:0 10px;
}
.message{
  display: flex;
  line-height: 40px;
}
.time{
  padding-left: 10px;
  font-size: 14px;
  color: #999;
}
.style{
  padding-left: 10px;
  font-size: 14px;
  color: #999;
}
</style>