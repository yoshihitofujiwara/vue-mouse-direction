import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MouseDirection from '@/components/MouseDirection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MouseDirection',
      component: MouseDirection
    }
  ]
})
