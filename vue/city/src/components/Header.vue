<template>
    <div id="Header">
        <div v-if="title=='首页'" class="HeaderHome">
            <span v-html="ipAddress " @click="goCity"></span>
            <b> ▼ </b> |
            <input type="text" placeholder="请输入搜索内容">
        </div>

        <div v-else-if="title=='城市'" class="HeaderCity">
            <a @click="goHome">＜</a>
            |
            <span>选择城市</span>
            <button @click="goBigCity">上牌城市选择 ></button>
        </div>

        <div v-else-if="title=='上牌城市'" class="HeaderBigCity">
            <a @click="goBack">＜</a>
            |
            <span>选择上牌城市</span>
        </div>

        <div v-else class="HeaderOther">
            <a @click="goBack">＜</a>
            <span v-html="title"></span>
            <b>&nbsp;&nbsp;&nbsp;</b>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title"],
    data() {
        return {
            ipAddress: window.sessionStorage.getItem("address")
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        goCity() {
            this.$router.push("/city")
        },
        goBigCity() {
            this.$router.push("/bigcity")
        },
        goHome(){
            this.$router.push("/home")
        }
    }
}
</script>

<style>
#Header {
    width: 100%;
    height: 1rem;
    border-bottom: .01rem solid #ccc;
}

#Header>div {
    padding: 0 .3rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#Header>div>span {
    font-size: .28rem;
    line-height: 1rem;
}

.HeaderHome b {
    padding: 0 .1rem;
}

.HeaderHome span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#Header>div>a {
    font-size: .3rem;
}

.HeaderHome input {
    border: 0;
    outline: 0;
    width: 75%;
    border-bottom: .01rem solid #ccc;
    line-height: .5rem;
    padding-left: .2rem;
    font-size: .25rem;
}

.HeaderCity,
.HeaderBigCity {
    background: skyblue;
    font-size: .3rem;
    color: #fff;
}

.HeaderCity span {
    width: 60%;
    color: #fff;
}

.HeaderBigCity span {
    width: 85%;
    color: #fff;
}

.HeaderCity button {
    border: 0;
    outline: 0;
    background: indianred;
    color: #fff;
    line-height: .6rem;
    padding: 0 .15rem;
    font-size: .22rem;
}

.HeaderCity a,
.HeaderBigCity a {
    color: #fff;
}
</style>
