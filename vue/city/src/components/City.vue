<template>
    <div class="City">
        <Header :title="title"></Header>
        <div class="CityTop">
            <h2>您已选择城市：</h2>
            <ul>
                <li v-for="(v,i) in citys" :key="i" v-html="v.city" @click="(e)=>{delCity(e,v.city)}"></li>
            </ul>
        </div>
        <div class="CityBox">
            <div v-for="(val,ind) in data" :key="ind" v-if='val.citys.length'>
                <h3 v-html="val.letter"></h3>
                <ul>
                    <li v-for="(v,i) in val.citys" :key="i" v-html="v" @click="(e)=>{giveCity(e,v)}" v-default ref="li"></li>
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
            title: "城市",
            data: null,
            citys: [{ city: window.sessionStorage.getItem("address") }],
            li1: true,
        }
    },
    beforeRouteEnter(to, from, next) {
        axios.get("/api/citydata")
            .then((data) => {
                next((vm) => {
                    vm.data = data.data
                })
            })
    },
    mounted() {
        setTimeout(() => {
            this.$refs.li.forEach((v, i) => {
                if (v.innerHTML == window.sessionStorage.getItem("address")) {
                    this.citys[0].dom = v
                }
            })

        }, 0);
    },
    methods: {
        giveCity(e, v) {
            if (e.target.className != 'active') {
                if (this.citys.length < 5) {
                    e.target.className = "active"
                    this.citys.push({ city: v, dom: e.target })
                }
            }
            else {
                this.foreach(v)
            }
            window.sessionStorage.address = this.citys[0].city
        },
        delCity(e, v) {
            this.foreach(v)
        },
        foreach(v) {
            if (this.citys.length != 1) {
                this.citys.forEach((val, ind) => {
                    if (val.city == v) {
                        this.citys.splice(ind, 1)
                        val.dom.className = ""
                    }
                })
            }
            window.sessionStorage.address = this.citys[0].city
        }
    },
    components: {
        Header
    },
    directives: {
        default: {
            bind(el) {
                if (el.innerHTML == window.sessionStorage.getItem("address")) {
                    el.className = "active"
                }
            }
        }
    }
}
</script>

<style>
.City {
    width: 100%;
    height: 100%;
    background: #fff;
    position: fixed;
}

.CityTop {
    border-bottom: .01rem solid #ccc;
}

.CityTop h2 {
    line-height: .8rem;
    padding-left: .3rem;
    font-size: .3rem;
}

.CityBox {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.CityBox h3 {
    line-height: .5rem;
    padding-left: .2rem;
    font-size: .3rem;
}

.CityBox ul,
.CityTop ul {
    display: flex;
    flex-wrap: wrap;
}

.CityBox ul li,
.CityTop ul li {
    padding: .2rem;
    margin: .1rem;
    font-size: .25rem;
    border: .01rem solid transparent;
}

.CityBox ul li.active {
    border: .01rem solid red;
}
</style>
