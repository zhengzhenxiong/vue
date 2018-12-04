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
      // children:[
      //   {
      //     path:"/shop/goods",
      //     component:Goods
      //   }
      // ]
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/serveres/addServeres.vue')
      },   
      {
        path: 'outlets',
        name: 'outlets',
        
        component: () => import(/* webpackChunkName: "about" */ './components/outlets/app.vue')
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
       
      }
    ],
    }
  ]
})
