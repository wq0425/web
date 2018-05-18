<template>
    <div class="changeAddress">
        <div class="head">
            <b @click="back"> ＜ </b>
            {{title}}
            <a @click="ok">保存</a>
        </div>
        <div class="changeAddressBox">
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "修改地址",
            address: {
                names: "",
                phones: "",
                address: "",
                id: ''
            }
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        ok() {
            let obj = this.address
            this.axios.post("/api/taobao/address/changeIdAddress", obj).then((data) => {
                switch (data.data.code) {
                    case "3001":
                        this.$message({
                            message: data.data.msg,
                            center: true,
                            duration: 1500,
                            type: "success"
                        });
                        this.$router.push("/address")
                        break;
                    case "3000":
                    case "3002":
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
    },
    created() {
        this.axios.post("/api/taobao/address/getIdAddress", { id: this.$route.query.id }).then((data) => {
            for (let key in data.data[0]) {
                this.address[key] = data.data[0][key]
            }
        })
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

#changeAddress {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}

.changeAddressBox {
    width: 100%;
}

.changeAddressBox p,
.changeAddressBox div {
    width: 100%;
    padding: .3rem .2rem;
    background: #fff;
    border-bottom: .01rem solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.changeAddressBox div {
    justify-content: space-between;
}

.changeAddressBox p input {
    border: 0;
    outline: 0;
    flex: 8;
}

.changeAddressBox p span {
    flex: 2;
}
</style>
