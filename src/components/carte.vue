<template>
  <div class="map">
    <br><br>
    <h1>{{ msg }}</h1>
    <br><br>



<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3489.69034040954!2d1.9730069!3d49.1024893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f3f5f0ef77d1%3A0x8f51e93f41f5e8cb!2sTennis%20Club%20de%20Us!5e1!3m2!1sfr!2sfr!4v1598088797864!5m2!1sfr!2sfr"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>



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
