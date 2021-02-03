<template>
  <div class="recommend">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data(){
    return {  

    }
  }
}
</script>

<style scoped>
.recommend{
  flex: 1;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 10px solid #ededed;
}
.recommend img{
  width: 70px;
  display: block;
  margin: 0 auto;
}
.recommend p{
  text-align: center;
  color: #666;
  font-size: 12px;
  margin-top: 8px;
}
</style>