import Vue from 'vue'
import Router from 'vue-router'
import Shop from './views/shop.vue'
import Goods from "./components/goods/app"
import Login from "./views/login.vue"
import Reg from './components/reg/reg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop,
      // children:[
      //   {
      //     path:"/shop/goods",
      //     component:Goods
      //   }
      // ]
    },
    {
      path: '/Shop',
      name: 'Shop',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/shop.vue'),
      children:[{
        path: 'goods',
        name: 'goods',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/goods/app.vue')
      },
      {
        path: 'serveres',
        name: 'serveres',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/serveres/app.vue')
        component: () => import(/* webpackChunkName: "about" */ './components/serveres/serveres.vue')
      },
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/outlets/app.vue')
        component: () => import(/* webpackChunkName: "about" */ './components/outlets/outlets.vue')
      }
    ],
    }
  ]
})
