<template>
    <div class="content">
        <div class="">
            <goods v-for="item in goodsList"
                :goodsName="item.name"
                :goodsPrice="item.price"
                :goodsIcon="item.img"
            >
            </goods>
        </div>
    </div>
</template>

<script>
const goods = {
    props:['goodsName','goodsPrice','goodsIcon'],
    template:`
    <div> 
        <p v-text="goodsName"></p>
        <p v-text="goodsPrice"></p>
        <div> <img :src="goodsIcon" alt=""></div>
    </div>    
    `
}

export default {
    data(){
        return {
            goodsList:[]
        }
    },
    components:{
        goods
    },
    created(){
        console.log('创建了')
        this.axios({
            url:'http://localhost:8080/mock/storedetaillist',
            method:'POST',
            data:this.format({
                type:this.$route.params.foodtype
            })
        })
        .then((result)=>{
            console.log(result.data)
            this.goodsList = result.data;
        },(error)=>{
            throw error;
        })
    },
    beforeRouteUpdate (to, from, next) {
        this.axios({
            url:'http://localhost:8080/mock/storedetaillist',
            method:'POST',
            data:this.format({
                type:this.$route.params.foodtype
            })
        })
        .then((result)=>{
            console.log(result.data)
            this.goodsList = result.data;
            next()
        },(error)=>{
            throw error;
        })
    }
}
</script>

<style scoped>
    .content{
        height: 100%;
        overflow-y: scroll;
    }
</style>
