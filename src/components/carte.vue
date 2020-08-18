<template>
  <div class="map">
    <br><br>
    <h1>{{ msg }}</h1>
    <br><br>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1306.0815513824173!2d1.9721424583089997!3d49.10254185089051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f3f5f0ef77d1%3A0x8f51e93f41f5e8cb!2sTennis%20Club%20de%20Us!5e0!3m2!1sfr!2sfr!4v1597393997657!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  


</div>

</template>

<script>
export default {
  name: 'Map',
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
