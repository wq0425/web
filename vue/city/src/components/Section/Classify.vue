<template>
    <div class="Classify">
        <Header :title="title"></Header>
        <div class="ClassifyBox">
            分类
        </div>
    </div>
</template>

<script>
import Header from "../Header"
export default {
    data() {
        return {
            title: "分类"
        }
    },
    components: {
        Header
    }
}
</script>

<style>
#Classify {
    width: 100%;
    height: 100%;
}
#Classify .ClassifyBox{
    width: 100%;
    flex:1;
    overflow-y: scroll;
}
</style>
