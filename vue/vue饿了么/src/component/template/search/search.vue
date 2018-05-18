<template>
  <div class="search-box">
      <div class="search" @touchend="openSearchPage">
        <span class="iconfont icon" :class="iconfont"></span><span v-text="text" class="text"></span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        iconfont:{
            type:[String],
            required:true
        },
        text:{
            type:[String]
        }
    },
    methods:{
        openSearchPage(){
            console.log('打开搜索页')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../css/style.scss';
    .search-box{
        padding: .12rem;
        background-color: $mainBgColor;
        height: .55rem;
        line-height: .55rem;
    }
    .search{
        border-radius: .05rem;
        text-align: center;
        color:$mainTextColor;
        background-color:#ffffff;
    }
    .search span{
        font-size: .22rem;
    }
</style>
