<template>
    <div id="gwc">
        <div v-for="(val,ind) in data" :key="ind">
            <input type="checkbox" :checked="val.flag" @click="() => {changeFlag(ind)}">
            <p>
                <span v-html="val.title"></span>
                <span v-html="val.price"></span>
            </p>
            <p>
                <button @click="() => {del(ind)}">-</button>
                <span v-html="val.count"></span>
                <button @click="() => {add(ind)}">+</button>
            </p>
        </div>
        <input type="checkbox" @click="(e) => {quan(e)}" :checked="obj.flag"></input>全选
        <br> 数量：
        <span>{{obj.count}}</span>
        <br> 总价：
        <span>{{obj.price}}</span>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
    data() {
        return {
            aa: [
                { title: "李博肉", price: 10, count: 1, flag: false },
                { title: "许云山肉", price: 20, count: 1, flag: false },
                { title: "刘建行肉", price: 30, count: 1, flag: false },
                { title: "李萧肉", price: 40, count: 1, flag: false }
            ],
        }
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
    mounted() {
        this.getData(this.aa)
    }
}
</script>

<style>
#gwc {
    width: 100%;
    height: 100%;
    font-size: 30px;
}

#gwc div {
    display: flex;
    height: 20%;
}

#gwc input {
    width: 30px;
    height: 30px;
    ;
}

#gwc button {
    padding: 10px;
    font-size: 25px;
    margin: 20px;
}
</style>
