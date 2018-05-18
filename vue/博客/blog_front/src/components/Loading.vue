<template>
    <div v-loading="loading" class="loading" element-loading-text="拼命加载中..." element-loading-spinner="el-icon-loading">
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    data() {
        return {
            loading: true
        }
    },
    methods: {
        ...mapActions(['getAllData'])
    },
    created() {
        this.getAllData({ router: this.$router, route: this.$route })
    }
}
</script>

<style>
.loading {
    width: 100%;
    height: 100%;
    background: #ffc;
    font-size: 50px;
}
</style>
