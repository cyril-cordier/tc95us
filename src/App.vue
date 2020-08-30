<template>
  <div id="app">

<div id="barnav">
    <div id="nav">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="/"><div @click="refresh()"><img alt="Vue logo" src="./assets/logo_tcus.png" style="height:5rem"></div></router-link>
        </li>
        <li>
          <router-link to="/" class="nav-link "><div @click="refresh()">Accueil</div></router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">Le Club</a>
          <div class="dropdown-menu">
            <router-link to="/club" class="dropdown-item">Nos installations</router-link>
            <router-link to="/carte" class="dropdown-item">Nous trouver</router-link>
            <router-link to="/evenements" class="dropdown-item">Animations et Evènements</router-link>
            <router-link to="/tarifs" class="dropdown-item">Tarifs</router-link>
            <router-link to="/bureau" class="dropdown-item">Les membres du bureau</router-link>
            <router-link to="/reglement_club" class="dropdown-item">Règlement du Club</router-link>
            <!-- <div class="dropdown-divider"></div> -->
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">Compétitions</a>
          <div class="dropdown-menu">
            <router-link to="/championnats" class="dropdown-item">Les Championnats par équipe</router-link>
            <router-link to="/challenge" class="dropdown-item">Le Challenge</router-link>
          </div>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
            aria-expanded="false">Mon compte</a>
          <div class="dropdown-menu"> -->
            <!-- <router-link to="/register" class="dropdown-item">S'inscrire</router-link>
            <router-link to="/login" class="dropdown-item">S'identifier</router-link> -->
            <!-- <router-link to="/MonCompte" class="dropdown-item">Mon Compte</router-link>
            <div v-for="user in getUser" :key="user.id">
        <div v-if="user.admin!=false in getUser">
            <router-link to="/admin" class="dropdown-item">Admin</router-link>
        </div></div> -->
            <!-- <router-link to="/">
              <div @click="logout()" class="dropdown-item">Déconnection</div>
            </router-link> -->
          <!-- </div>
        </li> -->
      </ul>
      </div>
      <router-view />
    </div>













    <footer>
      <div class="container-fluid">
      <div class="row">

        <div class="partenaires">
          Nos partenaires
          <img class="logopart" id="logo ecosport" alt="Vue logo" src="./assets/ecosport_small.jpg">
          <img class="logopart" alt="logo technifibre" src="./assets/technifibre_small.jpg">

        </div>


      </div>
      <div class="card-group">

        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Contact</h5>
            <p class="card-text"><strong>Tennis Club de Us</strong><br>
              jardin public (RD 28)<br>
              95450 Us<br>
              <a href="mailto:tc95us@gmail.com">tc95us@gmail.com</a></p>
            
            <p class="card-text">
              <router-link to="/carte"><div @click="refreshiti()">Itinéraire pour venir au club</div></router-link>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Informations</h5>
            <p class="card-text">
            <router-link to="/legal"><div @click="refreshleg()">Mentions légales</div></router-link></p>
            <p class="card-text">
            <router-link to="/reglement_club"><div @click="refreshrgt()">Règlement du Club</div></router-link></p>
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
              <router-link to="/calendrier_events"><div @click="refreshcal()">Calendrier des évènements</div></router-link>
            </p>
          </div>
        </div>
      </div>
      </div>
    </footer>

  <div class="footer">
    Site créé par Cyril CORDIER - <router-link to="/admin"><div class="footer">Accès Admin</div></router-link>
  </div>

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

      ...mapActions(['fetchUser', 'fetchUserById']),
      /* logout() {
        window.localStorage.removeItem('token');
        window.location.href = "/";
      },  */
      refresh() {
        window.location.href = "/";
      },
      refreshiti() {
        window.location.href = "/carte";
      },
      refreshcal() {
        window.location.href = "/calendrier_events";
      },
      refreshrgt() {
        window.location.href = "/reglement_club";
      },
      refreshleg() {
        window.location.href = "/legal";
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
#barnav{
  background-color: #f0d44a;
background-image: linear-gradient(315deg, #f0d44a 0%, #eca794 74%);


}
  .partenaires {
    display: block;
    margin: 50px;
    margin-left: auto;
    margin-right: auto
  }
.grid{
  grid-auto-rows: minmax(100px, auto);
}
.card{
  
 border: none;
 background: transparent;

}
  .logopart {

    margin: 1rem;
  }
   .footer{
    text-align: center;
    color: lightgrey;
  }
</style>