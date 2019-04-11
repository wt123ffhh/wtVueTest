import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      name: 'goods',
      component: () => import( /* webpackChunkName: "about" */ './components/goods.vue')
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: () => import( /* webpackChunkName: "about" */ './components/ratings.vue')
    },
    {
      path: '/seller',
      name: 'seller',
      component: () => import( /* webpackChunkName: "about" */ './components/seller.vue')
    },
  ]
})