<template>
    <div class="BigCity">
        <Header :title="title"></Header>
        <div class="BigCityBox">
            <div class="BigCityLeft">
                <div v-for="(val,ind) in data" :key="ind">
                    <h3 v-html="val.letter"></h3>
                    <ul>
                        <li v-for="(v,i) in val.province" :key="i" v-html="v" :class="v==city?'active':''" @click="() => {changeCity(v)}"></li>
                    </ul>
                </div>
            </div>
            <div class="BigCityRight">
                <ul>
                    <li v-for="(val,ind) in citys" :key="ind" v-html="val" @click="() => {giveCity(val)}"></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header"
import axios from "axios"
export default {
    data() {
        return {
            title: "上牌城市",
            data: null,
            data1: null,
            citys: [],
            city: "",
        }
    },
    methods: {
        changeCity(v) {
            this.city = v
            this.citys = []
            this.data1.forEach((v, i) => {
                v.forEach((val, ind) => {
                    if (val.province == this.city) {
                        if (v.length > 1) {
                            this.citys.push(val.name)
                        }
                        else {
                            this.citys.push(val.province)
                        }
                    }
                })
            })
        },
        giveCity(v) {
            this.$router.push("/city")
            window.sessionStorage.address = v
        }
    },
    beforeRouteEnter(to, from, next) {
        axios.get("/api/bigcitydata")
            .then((data) => {
                next((vm) => {
                    vm.city = data.data[0][0].province[0]
                    vm.data = data.data[0]
                    vm.data1 = data.data[1]
                })
            })
    },
    mounted() {
        setTimeout(() => {
            this.data1.forEach((v, i) => {
                v.forEach((val, ind) => {
                    if (val.province == this.city) {
                        this.citys.push(val.name)
                    }
                })
            })
        }, 0)
    },
    components: {
        Header
    }
}
</script>

<style>
.BigCity {
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
    display: flex;
    flex-direction: column;
}

.BigCityBox {
    flex: 1;
    width: 100%;
    display: flex;
}

.BigCityLeft h3 {
    line-height: .6rem;
    padding-left: .3rem;
    font-size: .3rem;
    background: #ccc;
}



.BigCityLeft ul,
.BigCityRight ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.BigCityLeft ul li,
.BigCityRight ul li {
    font-size: .25rem;
    line-height: .8rem;
    padding-left: .2rem;
    background: #eee;
}

.BigCityLeft ul li.active {
    background: #fff;
}

.BigCityRight ul li {
    border-bottom: .02rem solid #ccc;
    background: #fff;
}

.BigCityRight,
.BigCityLeft {
    flex: 1;
    overflow-y: scroll;
}
</style>
