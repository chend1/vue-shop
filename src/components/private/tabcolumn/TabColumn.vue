<template>
  <div class="tabcolumn">
    <TabColumnItem v-for="(item,index) in filter" :key="index" :class="tabIndex===index ? 'active' : ''" @tabClick="tabClick(index)">
      {{item.title}}
    </TabColumnItem>
  </div>
</template>

<script>
import TabColumnItem from './TabColumnItem'
export default {
  name: 'TabColumn',
  components: {
    TabColumnItem
  },
  props: {
    filter: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {  
      tabIndex: 0
    }
  },
  methods: {
    tabClick(idx){
      this.tabIndex = idx;
      this.$emit('tabClick',idx)
    }
  }
}
</script>

<style scoped>
.tabcolumn{
  display: flex;
  position: sticky;
  top: 44px;
  left: 0;
  background-color: #fff;
}
</style>