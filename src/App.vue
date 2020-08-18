<template>
  <div id="app">
    <div id="nav">
      <img alt="Vue logo" src="./assets/logo_tcus.png" style="height:5rem">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/carte">Nous trouver</router-link> |
      <router-link to="/evennements">Animations et Evennements</router-link> |
      <router-link to="/tarifs">Tarifs</router-link> |
      <router-link to="/championnats">Championnats</router-link> |
      <router-link to="/about">A propos</router-link> |
      <router-link to="/register">S'inscrire</router-link> |
      <router-link to="/login">S'identifier</router-link> |
      <router-link to="/MonCompte">Mon Compte</router-link>
<router-view/>
    </div>
    


    <footer>
      <br><br>
    <div class="row">
    
    <div class="partenaires">
  Nos partenaires
    <img class="logopart"  id="logo ecosport" alt="Vue logo" src="./assets/ecosport_small.jpg">
    <img class="logopart"  alt="logo crit center" src="./assets/critcenter_small.jpg">
    <img class="logopart" alt="logo technifibre" src="./assets/technifibre_small.jpg">
      
  </div>


</div>
  <div class="card-group">

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Contact</h5>
      <p class="card-text">Tennis Club de Us</p>
      <p class="card-text">jardin public (RD 28)</p>
      <p class="card-text">95450 Us</p>
      <br>
      <p class="card-text"><router-link to="/carte">Itinéraire pour venir au club</router-link></p>
    </div>
  </div>
        <div class="card">
    <div class="card-body">
      <h5 class="card-title">Informations</h5>
      <p class="card-text">Mentions légales</p>
    </div>
  </div>
    <div class="card">
    <div class="card-body">
      <img alt="logo technifibre" src="./assets/logoclubaffilie.png" style="height:30%">
    </div>
  </div>
      <div class="card">
    <div class="card-body">
      <h5 class="card-title">Vos liens utiles</h5>
      <p class="card-text"><a href="https://tenup.fft.fr/" target="blank">Mon espace Tennis</a></p>
      <p class="card-text"><a href="https://www.fft.fr/" target="blank">Site de la FFT</a> </p>
      <p class="card-text"><a href="https://comite.fft.fr/val-d-oise/val-d-oise_a/cms/index_public.php?PHPSESSID=1c5b3471354cf4e0f185c548eaebf509&us_action=show_note_site&login_off=1&ui_id_site=1" target="blank">Le site du Comité du Val d'Oise</a></p>
      
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <strong><h5 class="card-title">Restez connectés</h5></strong>
      <p class="card-text"><a href="https://www.facebook.com/groups/406488439536879/" target="blank">Facebook</a></p>
      <p class="card-text"><router-link to="/calendrier_events">Calendrier des évennements</router-link></p>
    </div>
  </div>
</div>
    </footer>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.partenaires {
  display: block;
  margin: 100px;
    margin-left: auto;
    margin-right: auto
  
  }
  .logopart {
  
  margin: 1rem;
    
  
  }
</style>
