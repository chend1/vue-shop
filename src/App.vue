<template>
  <div id="app">
    <TabbarMain/>
    <keep-alive exclude="Details,Cart">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import TabbarMain from 'components/private/tabbarmain/TabbarMain'
export default {
  name: 'App',
  components:{
    TabbarMain
  }
}
</script>
<style scoped>
  @import url('assets/css/base.css');
</style>
