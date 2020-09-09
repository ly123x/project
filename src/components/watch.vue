<template>
  <div>
      <input type="text" v-model="s">
  </div>
</template>

<script>
export default {
data(){
    return{
        s:"1212"
    }
},
watch:{
s(oldName,newName){
    console.log(oldName)
    console.log(newName)
}
}
}
</script>

<style>

</style>