<template>
    <div id="address">
        <div class="head">
            <b> ＜ </b>{{title}}
        </div>
        <div class="addressBox">
            <div v-for="(v,i) in address" :key="i" class="address">
                <p>
                    <span v-html="v.names"></span>
                    <span v-html="v.phones"></span>
                </p>
                <p v-html="v.address"></p>
                <div>
                    <span :class="v.defaults=='1' ? 'span' :''" @click='() => {change(v.id)}'>
                        <input type="checkbox" :checked="v.defaults=='1'" :id="v.id">
                        <label v-html="v.defaults=='1' ? '默认地址':'设为默认'" :for='v.id'></label>
                    </span>
                    <span>
                        <b @click='() => {update(v.id)}'>▓ 编辑</b>
                        <b @click='() => {del(v.id)}'>✘ 删除</b>
                    </span>
                </div>
            </div>
        </div>
        <div class="addressFoot">
            <button @click="add">添加新地址</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "管理收货地址",
            address: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.axios.get("/api/taobao/address/getAddress").then((data) => {
                let arr = []
                data.data.forEach((v, i) => {
                    if (v.defaults == "1") {
                        arr.push(v)
                    }
                })
                data.data.forEach((v, i) => {
                    if (v.defaults != "1") {
                        arr.push(v)
                    }
                })
                this.address = arr
            })
        },
        add() {
            this.$router.push("/addAddress")
        },
        update(id) {
            this.$router.push({ path: "/changeAddress", query: { id } })
        },
        del(id) {
            this.$confirm('此操作将永久删除该地址, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.axios.post("/api/taobao/address/delAddress", { id }).then((data) => {
                    this.$message({
                        message: data.data.msg,
                        center: true,
                        duration: 1500,
                        type: "success"
                    });
                    this.getData()
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        change(id) {
            this.axios.post("/api/taobao/address/changeAddress", { id }).then((data) => {
                switch (data.data.code) {
                    case "2001":
                        this.$message({
                            message: data.data.msg,
                            center: true,
                            duration: 1500,
                            type: "success"
                        });
                        this.getData()
                        break;
                    case "2000":
                    case "2002":
                        this.$message({
                            message: data.data.msg,
                            center: true,
                            duration: 1500,
                            type: "warning"
                        });
                        break;
                }
            })
        }
    }
}
</script>

<style>
.head {
    width: 100%;
    height: 1rem;
    border-bottom: .01rem solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .25rem;
    background: #fff;
}

.head b {
    font-size: .5rem;
    margin: 0 .2rem;
}

#address {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}

.addressBox {
    flex: 1;
    overflow-y: scroll;
}

.addressFoot {
    width: 100%;
    height: .8rem;
    background: #fff;
}

.addressFoot button {
    margin-top: .05rem;
    width: 90%;
    margin-left: 5%;
    height: .7rem;
    border: 0;
    outline: 0;
    background: darkorange;
    color: #fff;
    font-size: .3rem;
    border-radius: .3rem;
    cursor: pointer;
}

.address {
    width: 100%;
    padding-top: .1rem;
    background: #fff;
    margin-bottom: .2rem;
}

.address p {
    padding: .1rem .2rem;
}

.address p:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.address div .span label {
    color: darkorange;
}

.address div {
    margin-top: .1rem;
    border-top: .01rem solid #ccc;
    padding: .2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
