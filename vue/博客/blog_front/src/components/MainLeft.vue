<template>
    <div class="left">
        <el-table :data="listData" style="width: 100%;padding:15px;" stripe>
            <el-table-column label="标题" width="250">
                <template slot-scope="scope">
                    <span style="background:yellow;">{{ scope.row.article_name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="分类" width="200">
                <template slot-scope="scope">
                    <span style="background:pink;">{{ scope.row.cnname_one }}</span>
                </template>
            </el-table-column>
            <el-table-column label="作者" width="250">
                <template slot-scope="scope">
                    <span style="background:limegreen;">{{ scope.row.editer }}</span>
                </template>
            </el-table-column>
            <el-table-column label="时间" width="200">
                <template slot-scope="scope">
                    <span style="background:skyblue;">{{ scope.row.time }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            data: null
        }
    },
    computed: {
        ...mapState(['listData'])
    },
    created() {

    },
}
</script>

<style>
.left span {
    display: block;
    width: 100%;
    height: 100%;
    ;
    padding-left: 10px;
}
</style>
