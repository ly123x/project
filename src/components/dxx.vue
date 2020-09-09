<template>
  <div>{{msg|s}}</div>
</template>

<script>
export default {
data(){
    return{
       msg:'sdfr' 
    }
},
filters:{
    s:function(val){
        if(!val) val=''
        val=val.toString()
        return val.charAt(0).toUpperCase()+val.slice(1)
    }
}
}
</script>

<style>

</style>