<template>
  <div id="app">
    <TabbarMain/>
    <router-view/>
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
