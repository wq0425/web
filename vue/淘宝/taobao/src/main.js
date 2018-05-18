import App from "./components/app.vue"
import Vue from "vue"
import router from "./router"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vueAxios from "vue-axios"
import axios from "axios"
Vue.use(vueAxios, axios)

new Vue({
  el: "#root",
  router,
  template: "<App />",
  components: {
    App
  }
})