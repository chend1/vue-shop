<template>
  <div class="goodsLists">
    <GoodsListItem :cartItem='cartLists'></GoodsListItem>
  </div>
</template>
<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    }, 
    computed: {
      cartLists(){
        return this.$store.state.cartLists;
      }
    }
  }
</script>
<style scoped>
.goodsLists{
  width: 100%;
}

</style>