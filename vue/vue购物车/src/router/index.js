import Vue from 'vue'
import Router from 'vue-router'
import Gwc from "../components/Gwc"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Gwc
    }
  ]
})
