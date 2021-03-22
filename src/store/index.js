import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state:{
    cartLists: [],
    cartPoint: false
  },
  mutations: {
    addClick(state,goods){
      let result = state.cartLists.find( (item) => item.iid === goods.iid)
      if(result){ 
        result.count+=1;
        state.cartPoint = true
      } else {
        goods.count = 1;
        goods.checked = true;
        state.cartLists.push(goods);
        state.cartPoint = true
      }      
    },
    setClick(state,iid){
      let result = state.cartLists.find( (item) => item.iid === iid)
      result.checked = !result.checked
    },
    changeType(state){
      if(state.cartPoint){
        state.cartPoint = false
      }
    }
  },
  getters: {

  },
  actions: {
    addClick(context){
      setTimeout(() => {
        context.commit('changeType')
      }, 2000);
    }
  },
  modules:{ 
    
  }
})

export default vuex