<template>
    <div class="Home">
        <Header :title="title"></Header>
        <div class="HomeBox">
            首页
        </div>
    </div>
</template>

<script>
import Header from "../Header"
export default {
    data() {
        return {
            title: "首页"
        }
    },
    components: {
        Header
    }
}
</script>

<style>
#Home {
    width: 100%;
    height: 100%;
}
#Home .HomeBox{
    width: 100%;
    flex:1;
    overflow-y: scroll;
}
</style>
