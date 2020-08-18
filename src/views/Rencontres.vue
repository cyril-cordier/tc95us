<template>
  <div class="rencontres">
    <h1>Championnats par Equipes</h1>

    <p>Vous trouverez ici les résultats des rencontres par équipes du TC Us</p>

  
<Rencontres/>
  
  </div>

</template>

<script>
import Rencontres from '@/components/rencontres.vue'


export default {
  name: 'rencontres',
  components: {
    Rencontres, 
    
  }
}
</script>


