<template>
  <div>
    <p>{{a}}</p>
    <button @click="ddd()">aaa</button>
  </div>
</template>

<script>
export default {
data(){
  return{
    a:'100'
  }
},
methods:{
  ddd:function(){
    this.timer=setInterval(()=>{
      this.a--;
      console.log(this.a)
      if(this.a<95){
        console.log(this.a)
        this.$router.push({
          path:'/Index'
        })
      }
      },1000)
}
}
}
</script>

<style>

</style>