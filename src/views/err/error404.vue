<template>
  <div class="err">
    <div class="err-404">
      <router-link to="/home">立即返回</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'error404'
  }
</script>
<style scoped>
  .err{
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url(~assets/img/404.jpg);
    background-size: 100% 100%;
  }
  .err .err-404 a{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-indent: -9999px;
  }
</style>