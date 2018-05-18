<template>
    <div class="right">
        <div class="right_header">
            <div class="right_title">
                <span>搜索</span>
            </div>
            <div class="ipt">
                <el-input style="width: 60%" v-model="input" placeholder="请输入内容"></el-input>
                <el-button style="width: 30%;margin-left:5%;" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        <div class="right_content">
            <div class="right_title">
                <span>点击排行</span>
            </div>
            <el-table class="eltab" :data="numData" style="width: 100%">
                <el-table-column prop="article_name" style="width: 50%" align='center'>
                </el-table-column>
                <el-table-column prop="time" style="width: 50%" align='center'>
                </el-table-column>
            </el-table>
        </div>
        <div class="right_middware">
            <div class="right_title">
                <span>最新文章</span>
            </div>
            <el-table class="eltab" :data="timeData" style="width: 100%">
                <el-table-column prop="article_name" style="width: 50%" align='center'>
                </el-table-column>
                <el-table-column prop="time" style="width: 50%" align='center'>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: "",
            timeData: [],
            numData: []
        }
    }
}
</script>

<style>
.right {
    width: 70%;
    margin-left: 15%;
}

.right_header,
.right_content,
.right_middware {
    margin-top: .1rem;
}

.right_title {
    width: 100%;
    height: 40px;
    margin: .02rem 0;
    background: skyblue;
    text-align: center;
    line-height: 40px;
    border-radius: 10px;
    color: #fff;
}

.ipt{
    margin-top: 10px;
}

.eltab th {
    background: #ccc !important;
    font-size: large;
    display: none;
}
</style>
