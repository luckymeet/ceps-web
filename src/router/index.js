import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/views/app/index'
import WebIndex from '@/views/web/index'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [{
      path: '/app/index',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/web/index',
      name: 'WebIndex',
      component: WebIndex
    }
  ]
})
