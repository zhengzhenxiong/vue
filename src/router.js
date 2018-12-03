import Vue from 'vue'
import Router from 'vue-router'
import Info from './views/info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'info',
      component: Info,
      // children:[
      //   {
      //     path:"/shop/goods",
      //     component:Goods
      //   }
      // ]
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/goods/app.vue')
      },
      
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
      {
        path: 'serveres',
        name: 'serveres',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/serveres/app.vue')
      },
      {
        path: 'outlets',
        name: 'outlets',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ './components/outlets/app.vue')
      }
    ],
    }
  ]
})
