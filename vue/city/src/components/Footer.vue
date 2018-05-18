<template>
    <div id="Footer">
        <router-link v-for="(item,ind) in footers" :key="ind" :to="item.to" active-class="active">
            <i v-html="item.icon"></i>
            <span v-html="item.title"></span>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footers: [
                { title: "首页", to: "/home", icon: "home" },
                { title: "分类", to: "/classify", icon: "classify" },
                { title: "购物车", to: "/shopcar", icon: "shopcar" },
                { title: "我的", to: "/mine", icon: "mine" }
            ]
        }
    }
}
</script>

<style>
#Footer {
    width: 100%;
    height: 10%;
    border-top: .01rem solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#Footer a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}

#Footer a span,
#Footer a i {
    font-size: .25rem;
}

#Footer .active span,
#Footer .active i {
    color: red;
}
</style>
