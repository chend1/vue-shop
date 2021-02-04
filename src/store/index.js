import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuex = new Vuex.Store({
  state:{
    cartLists: [],
    count: 0
  },
  mutations: {
    addClick(state,goods){
      let result = state.cartLists.find( (item) => item.iid === goods.iid)
      if(result){
        goods.count+=1
      } else {
        goods.count = 1;
        goods.checked = true;
        state.cartLists.push(goods)
      }      
    }
  },
  getters: {

  },
  actions: {

  },
  modules:{ 
    
  }
})

export default vuex