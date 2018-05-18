import vueRouter from "vue-router"

import Vue from "vue"
Vue.use(vueRouter)


let Address = resolve => require(['../components/Address.vue'], resolve)
let AddAddress = resolve => require(['../components/AddAddress.vue'], resolve)
let ChangeAddress = resolve => require(['../components/ChangeAddress.vue'], resolve)


export default new vueRouter({
    routes: [
        {
            path: "/",
            component: Address,
            redirect: "/address"
        },
        {
            path: "/address",
            component: Address,
        },
        {
            path: "/addAddress",
            component: AddAddress,
        },
        {
            path: "/changeAddress",
            component: ChangeAddress
        }
    ]
})