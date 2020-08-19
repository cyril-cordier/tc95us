<template>
  <div class="challengeusers">
    <h1>Les joueurs du Challenge</h1>




    <table class="table">
      <thead>
        <tr>
          
          <th scope="col">Nom</th>
          <th>Contact (mail/tel)</th>
          <th>Classement FFT</th>
          <th>Points</th>
          <th>Nb Matchs</th>
          <th>Match average</th>
          <th>Set average</th>
          <th>Jeux average</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(challengeuser) in getAllChallengeusers" :key="challengeuser.id">

          <th>{{challengeuser.challengename}}</th>
          <th>{{challengeuser.contact}}</th>
          <th>{{challengeuser.ranking}}</th>
          <th>{{challengeuser.points}}</th>
          <th>{{challengeuser.nbmatchs}}</th>
          <th>{{challengeuser.matchaverage}}</th>
          <th>{{challengeuser.setaverage}}</th>
          <th>{{challengeuser.gameaverage}}</th>

        </tr>
      </tbody>
    </table>



  </div>



</template>

<script>
  // @ is an alias to /src


  /* import Footer from '@/components/footer.vue' */
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'challengeusers',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        challengename: '',
        ranking: '',
        contact: '',
        points: '',
        nbmatchs: '',
        matchaverage: '',
        setaverage: '',
        gameaverage: '',
        visible: '',


      }
    },
    methods: {

      ...mapActions(['fetchAllChallengeusers', 'fetchChallengeuserById']),

    },
    computed: mapGetters(['getChallengeuserMessage', 'getAllChallengeusers', 'getChallengeuser',
      'infoChallengeuserById', 'getUpdateChallengeuserMessage'
    ]),
    created() {

      this.fetchAllChallengeusers();


    }
  }
</script>