<template>
  <div>
      <div>
          我的
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title:'我的'
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