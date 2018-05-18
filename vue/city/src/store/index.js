import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex)

export default new vuex.Store({
    state: {
        data: null,
        obj: {
            count: 0,
            price: 0,
            flag: false
        }
    },
    actions: {
        manageAll({ state }) {
            let count = 0, price = 0
            state.data.forEach((v, i) => {
                if (v.flag) {
                    count += v.count
                    price += v.price * v.count
                }
            })
            state.obj.count = count
            state.obj.price = price
        },
        quxiaoAll({ state }) {
            let num = 0;
            state.data.forEach((v, i) => {
                if (v.flag) {
                    num++
                }
            })
            if (num == state.data.length) {
                state.obj.flag = true
            }
            else {
                state.obj.flag = false
            }
        },
        getData({ commit }, data) {
            commit("getData", data)
        },
        addCount({ dispatch, commit }, ind) {
            commit("addCount", ind)
            dispatch("quxiaoAll")
            dispatch("manageAll")
        },
        delCount({ dispatch, commit }, ind) {
            commit("delCount", ind)
            dispatch("quxiaoAll")
            dispatch("manageAll")
        },
        checked({ dispatch, commit }, ind) {
            commit("checked", ind)
            dispatch("quxiaoAll")
            dispatch("manageAll")
        },
        quanX({ dispatch, commit }, flag) {
            commit("quanX", flag)
            dispatch("manageAll")
        },
    },
    mutations: {
        getData(state, data) {
            state.data = data
        },
        addCount(state, ind) {
            state.data[ind].count += 1
            state.data[ind].flag = true
        },
        delCount(state, ind) {
            if (state.data[ind].count > 1) {
                state.data[ind].count -= 1
                state.data[ind].flag = true
            }
        },
        checked(state, ind) {
            state.data[ind].flag = !state.data[ind].flag
        },
        quanX(state, flag) {
            state.obj.flag = flag
            state.data.forEach((v, i) => {
                v.flag = state.obj.flag
            })
        },
    }
})