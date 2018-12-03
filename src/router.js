import Vue from 'vue'
import Router from 'vue-router'
import Info from './views/info.vue'
import Login from "./views/login.vue"
import Reg from './components/reg/reg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:Login
    },
    {
      path: '/login/:username',
      name: '_login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component:Reg
    },
    {
      path: '/info',
      name: 'info',
      component: () => import(/* webpackChunkName: "about" */ './views/info.vue'),
      children:[{
        path: 'goods',
        name: 'goods',
        component: () => import(/* webpackChunkName: "about" */ './components/goods/app.vue')
      },
      
      {
        path: 'addGoods',
        name: 'addGoods',
        component: () => import(/* webpackChunkName: "about" */ './components/goods/addGoods.vue')
      },
      {
        path: 'pets',
        name: 'pets',
        component: () => import(/* webpackChunkName: "about" */ './components/pets/app.vue')
      },
      {
        path: 'addPets',
        name: 'addPets',
        component: () => import(/* webpackChunkName: "about" */ './components/pets/addPets.vue')
      },
      // 服务

      {
        path: 'serveres',
        name: 'serveres',
        component: () => import(/* webpackChunkName: "about" */ './components/serveres/app.vue')
      },
      // 新增服务
      {
        path: 'addServeres',
        name: 'addServeres',
        component: () => import(/* webpackChunkName: "about" */ './components/serveres/addServeres.vue')
      },   
      {
        path: 'outlets',
        name: 'outlets',
        
        component: () => import(/* webpackChunkName: "about" */ './components/outlets/app.vue')
      }
    ],
    }
  ]
})
