import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import GoodsApp from "./components/goods/store.js"
import PetsApp from "./components/pets/store.js"
=======
import ServeresApp from "./components/serveres/store.js"
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
Vue.use(Vuex)
export default new Vuex.Store({
<<<<<<< HEAD
  modules:{
    GoodsApp,
    PetsApp
=======
  modules: {
    ServeresApp
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
  }

})
