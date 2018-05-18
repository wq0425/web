<template>
    <div class="footer">
        <btn  v-for="item in data" 
              :key="item.path" 
              :text="item.text" 
              :icon="item.icon"
              :path="item.path" 
              >
        </btn>
    </div>
</template>

<script>
import btn from './footer/footer-button.vue';

export default {
    props:{
        data:{
            type:[Array,Object],
            required:true
        }
    },
    components:{
        btn
    }
}
</script>

<style scoped>
    .footer{
        display: flex;
        height: .98rem;
        border-top:.02rem #b2b2b2 solid;
    }
</style>
