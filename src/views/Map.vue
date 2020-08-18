<template>
  <div class="map">
    
    <Map msg="Nous trouver"/>
  
  </div>

  
</template>

<script>
// @ is an alias to /src
import Map from '@/components/carte.vue'


export default {
  name: 'map',
  components: {
    Map, 
    
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