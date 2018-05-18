<template>
    <div class="Mine">
        <Header :title="title"></Header>
        <div class="MineBox">
            我的
        </div>
    </div>
</template>

<script>
import Header from "../Header"
export default {
    data() {
        return {
            title: "我的"
        }
    },
    components: {
        Header
    }
}
</script>

<style>
#Mine {
    width: 100%;
    height: 100%;
}

#Mine .MineBox {
    width: 100%;
    flex: 1;
    overflow-y: scroll;
}
</style>
