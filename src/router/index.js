import Vue from 'vue'
import VueRouter from "vue-router"
import home from '@/components/view'
import hello from '@/components/HelloWorld'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // {
    //   path: '/hello',
    //   name: hello,
    //   component: hello
    // },
    // {
    //   path: '*',
    //   redirect: '/login'
    // }
  ]
})