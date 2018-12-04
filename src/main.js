import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./components/_globals.js"
import ElementUI from "element-ui"
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import"./components/_globals.js"
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
