<template>
  <div>
      <input type="text" @keyup.enter="s" value="xx">
  </div>
</template>

<script>
export default {
methods:{
    s:function(){
        this.$router.push({
            path:'/IHeader'
        })
    }
}
}
</script>

<style>

</style>