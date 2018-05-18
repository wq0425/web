<template>
    <div class="Shopcar">
        <Header :title="title"></Header>
        <div class="ShopcarBox">
            <div class="ShopcarMain">
                <div v-for="(val,ind) in data" :key="ind">
                    <input type="checkbox" :checked="val.flag" @click="() => {changeFlag(ind)}">
                    <span v-html="val.title"></span>
                    <span v-html="val.price+'元'"></span>
                    <p>
                        <button @click="() => {del(ind)}">-</button>
                        <span v-html="val.count"></span>
                        <button @click="() => {add(ind)}">+</button>
                    </p>
                </div>
            </div>
            <div class="ShopcarFoot">
                <div>
                    <p><input type="checkbox" @click="(e) => {quan(e)}" :checked="obj.flag"></input>全选</p>
                    <p>数量：
                        <span>{{obj.count}}</span>
                    </p>
                    <p>总价：
                        <span>{{obj.price}}</span>
                    </p>
                </div>
                <button>结算</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../Header"
import { mapActions, mapState } from "vuex"
import axios from "axios"
export default {
    data() {
        return {
            title: "购物车"
        }
    },
    beforeRouteEnter(to, from, next) {
        axios.get("/api/shopcardata")
            .then((data) => {
                next((vm) => {
                    vm.getData(data.data)
                })
            })
    },
    computed: {
        ...mapState(["data", "obj"]),
    },
    methods: {
        ...mapActions(["getData", "addCount", "delCount", "checked", "quanX"]),
        add(ind) {
            this.addCount(ind)
        },
        del(ind) {
            this.delCount(ind)
        },
        changeFlag(ind) {
            this.checked(ind)
        },
        quan(e) {
            this.quanX(e.target.checked)
        }
    },
    components: {
        Header
    }
}
</script>

<style>
.Shopcar {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.ShopcarBox {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
}

.ShopcarMain {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
}

.ShopcarMain div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .2rem;
}

.ShopcarMain div span {
    font-size: .3rem;
    flex: 1;
}

.ShopcarMain p span {
    padding: 0 .1rem;
}

.ShopcarMain div button,
.ShopcarMain div input {
    width: .3rem;
    height: .3rem;
    font-size: .25rem;
    line-height: .3rem;
    margin: .1rem;
}

.ShopcarFoot {
    width: 100%;
    height: .8rem;
    border-top: .01rem solid #ccc;
    display: flex;
    justify-content: space-between;
}

.ShopcarFoot div {
    flex: 7;
    display: flex;
    align-items: center;
}

.ShopcarFoot div span {
    font-size: .3rem;
    margin-right: .1rem;
}

.ShopcarFoot div p:first-child {
    border-right: .02rem solid #ccc;
    height: 100%;
    line-height: .8rem;
    padding: 0 .1rem;
}

.ShopcarFoot div p:first-child input {
    width: .3rem;
    height: .3rem;
    margin-right: .1rem;
}

.ShopcarFoot div p {
    font-size: .3rem;
    margin-left: .1rem;
}

.ShopcarFoot button {
    flex: 3;
    background: red;
    outline: 0;
    border: 0;
    font-size: .3rem;
    color: #fff;
}
</style>
