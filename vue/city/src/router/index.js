import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Section/Home'
import Classify from '@/components/Section/Classify'
import Shopcar from '@/components/Section/Shopcar'
import Mine from '@/components/Section/Mine'
import City from '@/components/City'
import BigCity from '@/components/BigCity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home",
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/bigcity',
      component: BigCity
    },
  ]
})
