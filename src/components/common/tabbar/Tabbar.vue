<template>
  <div>
    <div class="tabbar">
      <slot></slot>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Tabbar',
  components:{
  }
}
</script>

<style scoped>
  .tabbar{
    display: flex;
    position: fixed;
    height: 49px;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
  }

</style>