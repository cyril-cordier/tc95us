<template>
  <div class="home">
    <img id="logotcus" alt="Vue logo" src="../assets/logo_tcus.png" style="width:15rem">
    <img alt="Tc Us" src="../assets/tcus.jpg" style="width:100%">

    
    

    <Accueil msg="Bienvenue sur le nouveau site du TC Us"/>
  
  </div>

  
</template>

<script>
// @ is an alias to /src
import Accueil from '@/components/Accueil.vue'


export default {
  name: 'Home',
  components: {
    Accueil, 
    
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