<template>
  <div class="goods">
    <Goods :goods="goods"></Goods>
  </div>
</template>

<script>
  import Goods from 'components/private/goods/Goods'
  export default {
    name: 'RecommendGoods',
    props: {
      goods: Array,
      default(){
        return []
      }
    },
    components: {
      Goods
    }
  }
</script>

<style scoped>

</style>