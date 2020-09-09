<template>
  <div>
      <input type="text" @keyup.enter="xx">
  </div>
</template>

<script>
export default {
methods:{
    xx:function(){
        this.$router.push({
            path:'/Index'
        })
    }
}
}
</script>

<style>

</style>