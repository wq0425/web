<template>
    <el-container>
        <el-header>
            <heads></heads>
        </el-header>
        <navs></navs>
        <el-container>
            <el-main>
                <lefts></lefts>
            </el-main>
            <el-aside width="500px">
                <rights></rights>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
import heads from "./Head"
import lefts from "./MainLeft"
import rights from "./MainRight"
import navs from "./Nav"
import { mapActions, mapState } from "vuex"
export default {
    components: {
        heads,
        lefts,
        rights,
        navs
    },
    data() {
        return {
            input: '',
            tableData: [], // 点击排行 最新文章
            tableData3: [],// 文章列表
        }
    },
    methods: {

    },
    changeTable(oneId) {
        console.log(oneId);
    },
    created() {

    }
}
</script>

<style>

</style>
