<template>
  <div class="home">
    <img id="logotcus" alt="Vue logo" src="../assets/logo_tcus.png" style="width:15rem">
    <img alt="Vue logo" src="../assets/tcus.jpg" style="width:100%">

    
    

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  #logotcus {
    position: absolute;
    top: 3%;
    margin: 32%;
  }
</style>