import Vue from 'vue'
import Router from 'vue-router'

import innerRoutes from '../views/inner/routes'
import outerRoutes from '../views/outer/routes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'outer',
      component: () => import('../views/outer'),
      children: [...outerRoutes]
    },
    {
      path: '/',
      name: 'inner',
      component: () => import('../views/inner'),
      children: [...innerRoutes]
    }
  ]
})
