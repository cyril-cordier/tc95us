<template>
  <div class="rencontres">

   <router-link to="/calendrier_events">Voir le calendrier des évennements</router-link>

    


    <br><br><br>

<table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th>Competition</th>
                <th>Rencontre</th>
                <th>Score</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(championnat) in getAllChampionnats" :key="championnat.date" orderBy=competition>
                <th>{{championnat.date}}</th>
                <th>{{championnat.competition}}</th>
                <th>{{championnat.match}}</th>
                <th>{{championnat.score}}</th>
              </tr>
            </tbody>
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
    name: 'rencontres',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        date: '',
        competition: '',
        match: '',
        score: '',

      }
    },
    methods: {


      ...mapActions(['fetchAllChampionnats']),


    },
    computed: mapGetters(['getChampionnatMessage', 'getAllChampionnats', 'getChampionnat', 'infoChampionnatById', 'getUpdateChampionnatMessage']),
    created() {

      this.fetchAllChampionnats();

      
    }
  }
</script>