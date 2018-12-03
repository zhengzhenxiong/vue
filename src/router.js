import Vue from 'vue'
import Router from 'vue-router'
import Info from './views/info.vue'
import Goods from "./components/goods/app"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'info',
      component:Info ,
      // children:[
      //   {
      //     path:"/shop/goods",
      //     component:Goods
      //   }
      // ]
    },
    {
      path: '/info',
      name: '/info',
      component: () => import(/* webpackChunkName: "about" */ './views/info.vue'),
      children:[{
        path: 'goods',
        name: 'goods',
        
        component: () => import(/* webpackChunkName: "about" */ './components/goods/app.vue')
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
