import Vue from 'vue'
import router from 'vue-router'

Vue.use(router)

let Main = resolve => require(['@/components/Main.vue'], resolve);
let Loading = resolve => require(['@/components/Loading.vue'], resolve);


export default new router({
    routes: [
        {
            path: '/',
            redirect: '/main',
            component: Main
        },
        {
            path: '/main',
            component: Main,
        },
        {
            path: '/loading',
            component: Loading,
        }
    ]
})