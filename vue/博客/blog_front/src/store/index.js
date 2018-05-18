import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listData: null,
        titleData: null,
        navData: [{ name: "首页" }],
        titleListData: []
    },
    actions: {
        getListData_a({ commit, state }, router) {
            Vue.axios.get("/api/front/list/getArticleList").then((data) => {
                commit("getListData_m", data.data)
                router.router.push({ path: "/main", query: { page: "listData" } })
            })
        },
        getTitleData_a({ commit, state }, router) {
            Vue.axios.get("/api/front/list/getClass").then((data) => {
                commit("getTitleData_m", data.data)
                router.router.push({ path: "/main", query: { page: "titleData" } })
            })
        },
        changeNavData_a({ commit, state }, data) {
            commit('changeNavData_m', data)
        },
        getAllData({ dispatch }, data) {
            switch (data.route.query.url.path) {
                case "/main": {
                    dispatch('getListData_a', data)
                    dispatch('getTitleData_a', data)
                } break;
            }
        }
    },
    mutations: {
        getListData_m(state, data) {
            state.listData = data
        },
        getTitleData_m(state, data) {
            state.titleData = data
        },
        changeNavData_m(state, data) {
            state.navData = [{ name: "首页" }]
            state.titleData.forEach((v, i) => {
                if (v.one.id == data[0]) {
                    state.navData.push({ name: v.one.cnname })
                    v.two.forEach((a, b) => {
                        if (a.id == data[1]) {
                            state.navData.push({ name: a.cnname })
                            state.listData.forEach((c, d) => {
                                if (c.twoId = data[1]) {
                                    console.log()
                                }
                            })
                        }
                    })
                }
            })
        },
    }
})