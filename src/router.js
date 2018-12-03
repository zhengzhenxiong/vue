import Vue from 'vue'
import Router from 'vue-router'
import Info from './views/info.vue'
<<<<<<< HEAD
=======
import Login from "./views/login.vue"
import Reg from './components/reg/reg.vue'
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'info',
      component: Info,
=======
      name: 'login',
      component:Login
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
      // children:[
      //   {
      //     path:"/shop/goods",
      //     component:Goods
      //   }
      // ]
    },
    {
<<<<<<< HEAD
=======
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
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
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
<<<<<<< HEAD
      
      {
        path: 'addGoods',
        name: 'addGoods',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/goods/addGoods.vue')
      },
      {
        path: 'pets',
        name: 'pets',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/pets/app.vue')
      },
      {
        path: 'addPets',
        name: 'addPets',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/pets/addPets.vue')
      },
=======
      // 服务
>>>>>>> 33706a9210693b3dba5ffae6587f17ffa146306f
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
