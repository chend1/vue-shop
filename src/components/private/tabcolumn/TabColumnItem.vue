<template>
  <div class="tabColumnItem" @click="tabClick">
    <div class="title">
      <span>
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabColumnItem',
  data(){
    return {  

    }
  },
  methods: {
    tabClick(){
      this.$emit('tabClick')
    }
  }
}
</script>

<style scoped>
.tabColumnItem{
  flex: 1;
}
.title{
  color: #666;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.active span{
  border-bottom: 2px solid #ff8198;
  color: #ff8198;
  padding: 8px;
}
</style>