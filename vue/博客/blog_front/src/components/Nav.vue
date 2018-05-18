<template>
    <div class="navSub">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(v,i) in navData" :key="i">{{v.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(["navData"])
    }
}
</script>

<style>
.navSub {
    margin-top: 20px;
}

.navSub div {
    width: 100%;
    height: 20px;
    overflow: hidden;
    padding-left: 30px;
}

.navSub div>span {
    line-height: 20px;
}
</style>
