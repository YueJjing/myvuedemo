import Vue from 'vue'
//引入Vuex
import Vuex from "vuex"
Vue.use(Vuex)

//存储数据
let state={
  buyNumber: 1,
  stateNumber:2
}

//存放改变数据的方法
let mutations={
  changeDate(){
    ++state.stateNumber
  }

}

let store = new Vuex.Store({
  state,
  mutations
})

//暴露
export default store;

