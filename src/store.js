import Vue from 'vue'
import Vuex from 'vuex'
import GoodsApp from "./components/goods/store.js"
import PetsApp from "./components/pets/store.js"
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    GoodsApp,
    PetsApp
  }
})
