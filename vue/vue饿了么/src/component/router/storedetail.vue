<template>
    <div class="store-detial">
        <div class="store-content">
            <div class="store-content-left"> 
                <router-link class="router-link" v-for="item in allData" :to="`/classify/${$route.params.type}/${$route.params.storeName}/goodslist/${item.type}`" v-text="item.type" :key="item.type" tag="div"></router-link> 
            </div> 
            <div class="store-content-right"> 
                <router-view></router-view> 
            </div>
        </div>
        <div class="shopping-car">
            <div class="shopping-car-icon">
                <div class="iconfont icon-gouwuche1 icon"></div>
            </div>
            <div class="left">
                <message class="left-msg" :price="sumPrice" :goodsCount="goodsCount"></message>
            </div>
            <div :class="rightClass">
                <div v-text="rightText" ></div>
            </div>
        </div>
    </div>
</template>

<script>

const leftMessage = {
    props:{
        price:{
            type:[Number]
        },
        goodsCount:{
            type:[Number],
            required:true
        }
    },
    template:`
        <div> 
            <div v-if="!goodsCount" style="line-height:.78rem;height:.78rem;color:#a3a3a4">未选购商品</div>
            <div v-else>
                <div class="sum-price" v-bind="price"></div>
                <div class="shipping-fee">配送费¥5</div>
            </div>
        </div>    
    `
}

export default {
    data(){
        return {
            goodsCount:0,
            sumPrice:0,
            minPrice:20,
            rightClass:'right',
            rightText:'¥0起送',
            allData:[]
        }
    },
    created(){
        this.axios({
            url:'http://localhost:8080/mock/storedetaillist',
            method:'GET'
        })
        .then((result)=>{
            this.allData = result.data;
        },(error)=>{
            throw error
        })
        this.bus.$emit('updataTitle',this.$route.params.storeName)
    },
    components:{
        message:leftMessage
    }
}
</script>

<style scoped lang="scss">
@import '../../css/style.scss';
/* iconfont icon-gouwuche1 */
    .store-detial{
        display: flex;
    }
    .shopping-car{
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        height: .78rem;
        background-color: $deepBg;
        display: flex
    }
    .left{
        flex: .72;
    }
    .right{
        flex: .28;
        background: #535356;
        text-align: center;
        line-height: .78rem;
        height: .78rem;
        color: #ffffff;
        font-size: .26rem;
    }
    .shopping-car-icon{
        position: absolute;
        left: .2rem;
        bottom: 0;
        height: .98rem;
        width: .98rem;
        border: .1rem #4d4d4f solid;
        background-color: #3d3d3d;
        border-radius: 50%;
        text-align: center;
        line-height: .78rem;
        box-sizing: border-box;
    }
    .icon{
        font-size: .5rem;
        color: #777777;
    }
    .left-msg{
        margin-left: 1.35rem;
    }
    .store-content{
        flex: 1;
        display: flex
    }
    .store-content-left{
        flex: 3;
        background: red;
    }
    .store-content-right{
        flex: 7;
        background: green;
    }
    .router-link{
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
    }
</style>
