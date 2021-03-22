<template>
  <div class="category">
    <ul>
      <li v-for="(item,index) in categoryList" :key="index">
        <a :href="item.link" class="item">
          <div class="img">
            <img :src="item.image" alt="">
          </div>
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    categoryList: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .category ul{
    overflow: hidden;
  }
  .category ul li{
    float: left;
    width: 33.3%;
  }
  .category ul li a{
    display: block;
    width: 100%;
    height: 110px;
  }
  .category ul li a .img{
    width: 60px;
    height: 60px;
    margin: 10px auto;
    border-radius: 50%;
    border: 2px solid #fbe7b4;
    overflow: hidden;
  }
  .category ul li a img{
    width: 60px;
    height: 60px;
  }
  .category ul li a p{
    color: #b2b2b2;
    width: 100%;
    text-align: center;
  }
</style>