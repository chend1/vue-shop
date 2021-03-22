<template>
  <div class="category-aside">
    <ul v-if="asideLists.length > 0">
      <li v-for="(item,index) in asideLists" :key="index" @click="listClick(item.maitKey)">
        <div :class=" { active: maitKey == item.maitKey }">
          {{item.title}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    asideLists: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    listClick(id){  
      this.maitKey = id
      this.$emit('listClick',id)
    }
  },
  data(){
    return {
      maitKey: 3627
    }
  }
}
</script>

<style scoped>
  .category-aside ul li{
    line-height: 45px;
    text-align: center;
  }
  ul li div{
    display: block;
    width: 100%;
    height: 45px;
    color: #818181;
    background-color: #eee;
    text-decoration: none;
  }
  ul li div.active{
    background-color: #fff;
    color: #ff5e7d;
    border-left: 1px solid #ff5e7d;
    box-sizing: border-box;
  }
</style>