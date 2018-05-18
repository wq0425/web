import Vue from 'vue'

// 路由 store
import router from './router'
import store from './store'

// element ui
import ElementUl from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUl)

// 请求接口
import VueAxios from 'vue-axios';
import axios from 'axios'
Vue.use(VueAxios, axios);

import './static/js/rem'
import './static/css/reset.css'


router.beforeEach((to, from, next) => {
    if (to.path != '/loading') {
        if (!store.state[to.query.page]) {
            next({ path: '/loading', query: { url: to } })
        }
        else {
            next()
        }
    }
    else {
        next()
    }
})

new Vue({
    el: '#root',
    router,
    store,
    template: '<App />',
    components: {
        App: resolve => require(['./App'], resolve)
    }
})