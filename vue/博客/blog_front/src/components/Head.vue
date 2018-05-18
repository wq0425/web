<template>
    <div class="headerbar">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" style="font-size:30px;">个人博客</el-menu-item>
            <el-submenu :index="v.one.id" v-for="(v,i) in titleData" :key="i">
                <template slot="title">{{v.one.cnname}}</template>
                <el-menu-item :index="val.id" v-for="(val,ind) in v.two" :key="ind">{{val.cnname}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
export default {
    data() {
        return {
            activeIndex: '1',
            data: null
        }
    },
    computed: {
        ...mapState(["titleData"])
    },
    methods: {
        ...mapActions(['changeNavData_a']),
        handleSelect(key, keyPath) {
            this.changeNavData_a(keyPath)
        }
    },
}
</script>

<style>
.headerbar {
    width: 100%;
    overflow: hidden;
    background: skyblue;
    border-radius: 15px;
}
</style>
