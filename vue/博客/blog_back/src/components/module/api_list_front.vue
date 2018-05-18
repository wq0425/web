<template>
  <div class="articleList">
    <el-table :data="lastData" border style="width: 100%">
      <el-table-column fixed prop="title" label="标题" width="250">
      </el-table-column>
      <el-table-column prop="backorfont" label="前后端分类" width="120">
      </el-table-column>
      <el-table-column prop="time" label="时间" width="200">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="change(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="delArticle(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :page-sizes="[5, 10, 15, 20]" :page-size="pages" layout="total, sizes, prev, pager, next, jumper" :total="listData.length"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: 5,
      page: 1,
      data: [],
      listData: [],
      lastData: [],
    }
  },
  methods: {
    delArticle(ind, data) {
      let id = data.id
      let backorfont = data.backorfont
      this.$confirm('此操作将永久删除该文档, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        this.axios.post("/api/back/module/deleteApi", { id: id }).then((data) => {
          switch (data.data.code) {
            case "4011":
              this.$message({
                type: 'success',
                message: data.data.msg
              });
              this.axios.post("/api/back/module/selectApi", { backorfont: backorfont }).then((data) => {
                this.listData = data.data
                this.data = []
                for (let i = 0; i < this.listData.length; i += this.pages) {
                  this.data.push(this.listData.slice(i, i + this.pages))
                }
                this.lastData = this.data[this.page - 1]
              })
              break;
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      })
    },
    change(ind, data) {
      sessionStorage.setItem("wendang", JSON.stringify(data))
      this.$router.push("/back/change_api")
    },
    handleSizeChange(val) {
      this.pages = val
      this.data = []
      for (let i = 0; i < this.listData.length; i += this.pages) {
        this.data.push(this.listData.slice(i, i + this.pages))
      }
      this.lastData = this.data[this.page - 1]
    },
    handleCurrentChange(val) {
      this.page = val
      this.lastData = this.data[this.page - 1]
    }
  },
  created() {
    this.axios.post("/api/back/module/selectApi", { backorfont: "font" }).then((data) => {
      this.listData = data.data
      for (let i = 0; i < this.listData.length; i += this.pages) {
        this.data.push(this.listData.slice(i, i + this.pages))
      }
      this.lastData = this.data[this.page - 1]
    })
  }
}
</script>

<style>

</style>
