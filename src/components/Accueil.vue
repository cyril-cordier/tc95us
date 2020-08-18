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
  
  
  
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="height:15px">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img id="logotcus" alt="Vue logo" src="../assets/technifibre.jpg" class="d-block w-100" >
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
</style>
