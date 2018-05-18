<template>
  <div>
      <div>
          订单
      </div>
  </div>
</template>

<script>
import navigation from '../template/header/header.vue';
export default {
    data(){
        return {
            title:'订单'
        }
    },
    components:{
    },
    created(){
        this.bus.$emit('updataTitle',this.title);
    }
}
</script>

<style>

</style>