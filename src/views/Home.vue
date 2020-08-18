<template>
  <div class="home">
    <img id="logotcus" alt="Vue logo" src="../assets/logo_tcus.png" style="width:15rem">
    <img alt="Tc Us" src="../assets/tcus.jpg" style="width:100%">

    
    

    <Accueil msg="Bienvenue sur le nouveau site du TC Us"/>
  
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img id="logotcus" alt="Vue logo" src="../assets/ecosport.jpeg" class="d-block w-100" >
        </div>
        <div class="carousel-item">
          <img id="logotcus" alt="Vue logo" src="../assets/critcenter.jpeg" class="d-block w-100" >
        </div>
        <div class="carousel-item">
          <img id="logotcus" alt="Vue logo" src="../assets/ecosport.jpeg" class="d-block w-100" >
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
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