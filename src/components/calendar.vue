<template>
  <div class="map">
    <br><br>
    <h1>{{ msg }}</h1>
    

    <div class="container-fluid">
      <div class="row-col-8">
        <div class="calendrier">
        <div class="embed-responsive embed-responsive-16by9"><iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%234285F4&amp;ctz=Europe%2FParis&amp;src=dGM5NXVzQGdtYWlsLmNvbQ&amp;src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%230B8043&amp;showTitle=0&amp;showTz=0&amp;showCalendars=0"
            style="border-width:0" scrolling="no"></iframe></div>
      </div>
    </div>
    </div>

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
  .calendrier{
    padding:5%;
  }
</style>