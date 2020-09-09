<template>
  <child :child="x"></child>
</template>

<script>
import child from "../components/z"
export default {
data(){
    return{
        x:"父组件"
    }
},
components:{
    child
}
}
</script>

<style>

</style>