<template>
  <div class="challengeusers">
    <h1>Les joueurs du Challenge</h1>




    <table class="table">
      <thead>
        <tr>

          <th scope="col">Nom</th>
          <th>Classement FFT</th>
          <th>Points</th>
          <th>Nb Matchs</th>
          <th>Match average</th>
          <th>Set average</th>
          <th>Jeux average</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="challengeuser in getAllChallengeusers" :key="challengeuser.id">

          <th>{{challengeuser.challengename}}</th>
          <th>{{challengeuser.ranking}}</th>
          <th>{{challengeuser.points}}</th>
          <th>{{challengeuser.nbmatchs}}</th>
          <th>{{challengeuser.matchaverage}}</th>
          <th>{{challengeuser.setaverage}}</th>
          <th>{{challengeuser.gameaverage}}</th>
          <th><a href="#" class="icon">
                    <i  @click="id=challengeuser.id" class="fas fa-eye" data-toggle="modal" :data-target="'#challengeusershowmodal'+challengeuser.id"></i>
                  </a>
          </th>



 <!-- Show Challengeuser modal -->


          <div class="modal fade" :id="'challengeusershowmodal'+challengeuser.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails joueur</h6><br><br>
                  <div class="signup-row">
                    <h3>{{challengeuser.challengename}}</h3>
                  </div>
                  <div class="signup-row">
                   <h6>Contact : {{challengeuser.contact}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>Classement : {{challengeuser.ranking}}</h6>
                  </div>


                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>


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


    computed: {
      ...mapGetters(['getChallengeuserMessage', 'getAllChallengeusers', 'getChallengeuser',
        'infoChallengeuserById', 'getUpdateChallengeuserMessage'
      ]),
      /* filteredChallengeusers: function() {
        function compare(a,b) {
          if (a.points < b.points)
          return -1;
          if (a.points > b.points)
          return 1;
          return 0;
          }
          return this.getAllChallengeusers.sort(compare);
      } */
    },
    created() {

      this.fetchAllChallengeusers();

console.log(this.getAllChallengeusers);
    }
  }
</script>