<template>
  <div class="tarifs">

    <br><br><br>

    <h2>LICENCE FFT (Obligatoire / Assurance)</h2>
  <table class="table">
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Tarif</th>
              </tr>
            </thead>
<tr v-for="(tarif) in getAllTarifs" :key="tarif.id">
                <th v-if="tarif.type == 'Licence'">{{tarif.category}}</th>
                <th v-if="tarif.type == 'Licence'">{{tarif.price1}}</th>
</tr>
</table>


    <br><br><br>

    <h2>COTISATION CLUB</h2>
  <table class="table">
            <thead>
              <tr>
                <th>Catégorie</th>
                <th>Tarif</th>
              </tr>
            </thead>
<tr v-for="(tarif) in getAllTarifs" :key="tarif.id">
                <th v-if="tarif.type == 'Cotisation'">{{tarif.category}}</th>
                <th v-if="tarif.type == 'Cotisation'">{{tarif.price1}}</th>
</tr>
</table>
<p>Réduction de 20€ pour une famille de 4 personnes</p>
 
 <br><br><br>

    <h2>COURS (Dispensés par un Diplômé d'Etat</h2>
  <table class="table">
            <thead>
              <tr>
                <th>Temps/semaine</th>
                <th>45 minutes</th>
                <th>1 heure</th>
                <th>1 heure 30</th>
                <th>2 heures</th>

              </tr>
            </thead>
<tr v-for="(tarif) in getAllTarifs" :key="tarif.id">
                <th v-if="tarif.type == 'Cours'">{{tarif.category}}</th>
                <th v-if="tarif.type == 'Cours'">{{tarif.price1}}</th>
                <th v-if="tarif.type == 'Cours'">{{tarif.price2}}</th>
                <th v-if="tarif.type == 'Cours'">{{tarif.price3}}</th>
                <th v-if="tarif.type == 'Cours'">{{tarif.details}}</th>
</tr>
</table>
    
<router-view/>
  </div>



</template>

<script>
  // @ is an alias to /src


  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'tarifs',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        type: '',
        category: '',
        price1: '',
        price2: '',
        price3: '',

      }
    },
    methods: {


      ...mapActions(['fetchAllTarifs']),


    },
    computed: mapGetters(['getTarifMessage', 'getAllTarifs', 'getTarif', 'infoTarifById', 'getUpdateTarifMessage']),
    created() {

      this.fetchAllTarifs();
    }
  }
</script>