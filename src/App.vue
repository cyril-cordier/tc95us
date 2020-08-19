<template>
  <div id="app">


    <div id="nav">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="/"><img alt="Vue logo" src="./assets/logo_tcus.png" style="height:5rem"></router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link active">Accueil</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">Le Club</a>
          <div class="dropdown-menu">
            <router-link to="/carte" class="dropdown-item">Nous trouver</router-link>
            <router-link to="/evennements" class="dropdown-item">Animations et Evennements</router-link>
            <router-link to="/tarifs" class="dropdown-item">Tarifs</router-link>
            <div class="dropdown-divider"></div>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">Competitions</a>
          <div class="dropdown-menu">
            <router-link to="/championnats" class="dropdown-item">Les Championnats par équipe</router-link>
            <router-link to="/challenge" class="dropdown-item">Le Challenge</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">Mon compte</a>
          <div class="dropdown-menu">
            <router-link to="/register" class="dropdown-item">S'inscrire</router-link>
            <router-link to="/login" class="dropdown-item">S'identifier</router-link>
            <router-link to="/MonCompte" class="dropdown-item">Mon Compte</router-link>
            <div v-for="user in getUser" :key="user.id">
        <div v-if="user.admin!=false in getUser">
            <router-link to="/admin" class="dropdown-item">Admin</router-link>
        </div></div>
            <router-link to="/">
              <div @click="logout()" class="dropdown-item">Déconnection</div>
            </router-link>
          </div>
        </li>
      </ul>
      <router-view />
    </div>













    <footer>
      <br><br>
      <div class="row">

        <div class="partenaires">
          Nos partenaires
          <img class="logopart" id="logo ecosport" alt="Vue logo" src="./assets/ecosport_small.jpg">
          <img class="logopart" alt="logo crit center" src="./assets/critcenter_small.jpg">
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
            <p class="card-text">
              <router-link to="/carte">Itinéraire pour venir au club</router-link>
            </p>
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
            <img alt="logo technifibre" src="./assets/logoclubaffilie.png" style="height:5rem">
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Vos liens utiles</h5>
            <p class="card-text"><a href="https://tenup.fft.fr/" target="blank">Mon espace Tennis</a></p>
            <p class="card-text"><a href="https://www.fft.fr/" target="blank">Site de la FFT</a> </p>
            <p class="card-text"><a
                href="https://comite.fft.fr/val-d-oise/val-d-oise_a/cms/index_public.php?PHPSESSID=1c5b3471354cf4e0f185c548eaebf509&us_action=show_note_site&login_off=1&ui_id_site=1"
                target="blank">Le site du Comité du Val d'Oise</a></p>

          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <strong>
              <h5 class="card-title">Restez connectés</h5>
            </strong>
            <p class="card-text"><a href="https://www.facebook.com/groups/406488439536879/" target="blank">Facebook</a>
            </p>
            <p class="card-text">
              <router-link to="/calendrier_events">Calendrier des évennements</router-link>
            </p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {

    
        data() {
      return {
        
        users_toggle: true,
        products_toggle: false,
        events_toggle: false,
        challengeusers_toggle: false,
        challengeresults_toggle: false,
        championships_toggle: false,
        tarifs_toggle: false,
        contents_toggle: false,
        officeusers_toggle: false,
                id:'',
        lastname: '',
        firstname: '',
        admin:'',
      }
    },
    methods: {

      ...mapActions(['fetchUser']),
      logout() {
        window.localStorage.removeItem('token');
        window.location.href = "/";
      }
 

    },
    computed: mapGetters(['getMessage', 'getAllUsers', 'getUser', 'infoUserById', ]),
    created() {
      this.fetchUser();
    }
  }
   
</script>


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