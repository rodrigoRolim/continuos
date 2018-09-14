import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ButtonMessage from '@/components/ButtonMessage'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/branco',
      name: 'ButtonMessage',
      component: ButtonMessage
    }
  ]
})
