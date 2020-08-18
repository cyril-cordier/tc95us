<template>
  <div class="accueil">
    <br><br>
    <h1>{{ msg }}</h1>
    <br><br>
    <div class="card-deck">
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Rejoignez le Tennis Club Us sur Facebook</h5>
      <div class="fb-group" data-href="https://www.facebook.com/groups/406488439536879" data-width="280" data-show-social-context="true" data-show-metadata="true"><blockquote cite="https://www.facebook.com/groups/406488439536879" class="fb-xfbml-parse-ignore">Tennis Club d&#039;Us</blockquote></div>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h2 class="card-title">Actualités</h2>
      <p class="card-text">Le Club de tennis de Us se dote d'un nouveau site web !</p>
      <p class="card-text">L'arrivée du nouveau Président du Club Philippe Béroule, le club a entamé un renouveau, à la fois dans ses installations et dans sa stratégie de visibilité. Ce nouveau site s'inscrit dans cette démarche de modernisation.</p>
      <p class="card-text"><small class="text-muted">C. Cordier</small></p>
    </div>
  </div>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Quel temps fait-il sur nos courts ?</h5>
      <iframe src="https://fr.tutiempo.net/s-widget/full/42145/ca5" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100%; height:500px;" allowTransparency="true"></iframe>
      <p class="card-text"><small class="text-muted">votre météo locale à Us, toujours à jour !</small></p>
    </div>
  </div>
</div>
<img alt="Bureau TC Us" src="../assets/bureau_small.jpg" style="width:60%">
  
  <div class="row">
    
    <div class="partenaires">
  Nos partenaires
    <img class="logopart"  id="logo ecosport" alt="Vue logo" src="../assets/ecosport_small.jpg">
    <img class="logopart"  alt="logo crit center" src="../assets/critcenter_small.jpg">
    <img class="logopart" alt="logo technifibre" src="../assets/technifibre_small.jpg">
      
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
      <p class="card-text">Itinéraire pour venir au club</p>
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
      <img alt="logo technifibre" src="../assets/logoclubaffilie.png" style="height:30%">
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
      <p class="card-text">Calendrier des évennements</p>
    </div>
  </div>
</div>
  
  
        
  </div>
</template>

<script>
export default {
  name: 'Accueil',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
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
