<template>
    <div class="changeApi">
        <el-form status-icon label-width="100px" class="demo-ruleForm one_class">
            <h3 class="h3">添加接口</h3>
            <el-form-item label="标题">
                <el-input placeholder="请输入内容" v-model="msg[0].data"></el-input>
            </el-form-item>
            <el-form-item label="接口地址">
                <el-input placeholder="请输入内容" v-model="msg[1].data"></el-input>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="msg[2].data" placeholder="请选择">
                    <el-option v-for="item in bof" :key="item.value" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请求类型">
                <el-select v-model="msg[3].data" placeholder="请选择">
                    <el-option v-for="item in types" :key="item.value" :label="item" :value="item">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请求参数">
                <el-input type="textarea" :rows="5" v-model="msg[4].data" placeholder="请输入请求参数">
                </el-input>
            </el-form-item>
            <el-form-item label="响应数据">
                <el-input type="textarea" :rows="5" v-model="msg[5].data" placeholder="请输入相应数据">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit">提交</el-button>
                <el-button @click="reset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: [
                { type: "title", data: "", title: "标题" },
                { type: "url", data: "", title: "接口地址" },
                { type: "backorfont", data: "", title: "类型" },
                { type: "type", data: "", title: "数据类型" },
                { type: "sendparams", data: "", title: "请求参数" },
                { type: "getparams", data: "", title: "相应数据" },
                { type: "id", data: "", title: "id" },
            ],
            bof: ["前端接口", '后台接口'],
            types: ["get", 'post', "formdata"]
        }
    },
    methods: {
        submit() {
            let str = ""
            let num = 0
            this.msg.forEach((v, i) => {
                if (v.type != "id") {
                    if (v.data) {
                        num++
                    }
                    else {
                        str += v.title + " "
                    }
                }
            })
            if (this.msg.length - 1 == num) {
                let obj = {}
                this.msg.forEach((v, i) => {
                    switch (v.type) {
                        case "backorfont":
                            var data = v.data == "前端接口" ? "font" : 'back'
                            obj[v.type] = data
                            break;
                        default:
                            obj[v.type] = v.data
                            break;
                    }
                })
                this.axios.post("/api/back/module/updateApi", obj).then((data) => {
                    switch (data.data.code) {
                        case "4021":
                            this.$message.success(data.data.msg)
                            if (obj.backorfont == "back") {
                                this.$router.push("/back/api_list_back")
                            }
                            else if (obj.backorfont == "font") {
                                this.$router.push("/back/api_list_front")
                            }
                            break;
                        case "4022":
                        case "4020":
                            this.$message.error(data.data.msg)
                            break;
                    }
                })
            }
            else {
                str += "✖还没有完善！"
                this.$message.warning(str)
            }
        },
        reset() {
            this.msg.forEach((v, i) => {
                v.data = ''
            })
        }
    },
    created() {
        var data = JSON.parse(sessionStorage.getItem("wendang"))
        this.msg[6].data = data.id
        this.msg.forEach((v, i) => {
            for (var key in data) {
                if (v.type == "backorfont") {
                    if (v.type == key) {
                        var keyData = data[key] == "back" ? "后端接口" : '前端接口'
                        v.data = keyData
                    }
                }
                else {
                    if (v.type == key) {
                        v.data = data[key]
                    }
                }
            }
        })
    }
}
</script>

<style>
.one_class {
    width: 700px;
}

.change {
    margin-top: 10px;
    width: 30%;
}

.one_class .h3 {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    padding-left: 40px;
}
</style>
