<template>
    <div id="addaddress">
        <div class="head">
            <b @click="back"> ＜ </b>
            {{title}}
            <a @click="ok">保存</a>
        </div>
        <div class="addaddressBox">
            <p>
                <span>收货人</span>
                <input type="text" v-model="address.names">
            </p>
            <p>
                <span>联系电话</span>
                <input type="text" v-model="address.phones">
            </p>
            <p>
                <span>所在地区</span>
                <input type="text" v-model="address.address">
            </p>
            <div @click="update">
                <span>设为默认地址</span>
                <input type="checkbox" v-model="address.defaults">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: "添加新地址",
            address: { names: "", phones: "", address: "", defaults: false, }
        }
    },
    methods: {
        back(){
            this.$router.go(-1)
        },
        update() {
            this.address.defaults = !this.address.defaults
        },
        ok() {
            let num = 0
            for (let key in this.address) {
                if (key == "defaults") {
                    num++
                }
                else {
                    if (this.address[key] != '') {
                        num++
                    }
                }
            }
            if (num == Object.entries(this.address).length) {
                let obj = {}
                for (let key in this.address) {
                    if (key == "defaults") {
                        obj[key] = this.address[key] == true ? "1" : "0"
                    }
                    else {
                        obj[key] = this.address[key]
                    }
                }
                this.axios.post("/api/taobao/address/addAddress", obj).then((data) => {
                    switch (data.data.code) {
                        case "1001":
                            this.$message({
                                message: data.data.msg,
                                center: true,
                                duration: 1500,
                                type: "success"
                            });
                            this.$router.push("/address")
                            break;
                        case "1000":
                        case "1002":
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
            else {
                this.$message({
                    message: '请确保全部输入完成！',
                    center: true,
                    duration: 1500,
                    type: "warning"
                });
            }
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
    position: relative;
}

.head b {
    font-size: .5rem;
    margin: 0 .2rem;
}

.head a {
    position: absolute;
    right: .2rem;
    top: .5rem;
    transform: translate(-50%, -50%);
    font-size: .2rem;
}

#addaddress {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}

.addaddressBox {
    width: 100%;
}

.addaddressBox p,
.addaddressBox div {
    width: 100%;
    padding: .3rem .2rem;
    background: #fff;
    border-bottom: .01rem solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.addaddressBox div {
    justify-content: space-between;
}

.addaddressBox p input {
    border: 0;
    outline: 0;
    flex: 8;
}

.addaddressBox p span {
    flex: 2;
}
</style>
