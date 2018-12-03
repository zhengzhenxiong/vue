import Vue from 'vue'
import Vuex from 'vuex'
import ServeresApp from "./components/serveres/store.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ServeresApp
  }

})
