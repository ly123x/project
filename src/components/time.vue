<template>
  <div>
      <input type="text" v-model="s">
  </div>
</template>

<script>
export default {
data(){
    return{
        s:''
    }
},
created:function(){
var date=new Date();
this.s=date.getFullYear()+"-"+(date.getMonth()+1)+""+date.getDate()
console.log(this.s)
}
}
</script>

<style>

</style>