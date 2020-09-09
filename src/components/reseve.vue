<template>
  <div>
      <input type="text" v-model="x">
      <button @click="fan">fan</button>
  </div>
</template>

<script>
export default {
data(){
    return{
        x:'swqdeqw'
    }
},
methods:{
fan:function(){
    this.x=this.x.split('').reverse().join('')
}
}

}
</script>

<style>

</style>