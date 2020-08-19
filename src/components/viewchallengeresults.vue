<template>
  <div class="challengeresults">
    <h1>Résultats Challenge</h1>




    <table class="table">
      <thead>
        <tr>

          <th scope="col">Vainqueur</th>
          <th>Perdant</th>
          <th>Set 1</th>
          <th>Set 2</th>
          <th>Set 3</th>
          <th>Points vainqueur</th>
          <th>Points perdant</th>
          <th>Détails</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(challengeresult) in getAllChallengeresults" :key="challengeresult.id">

          <th>{{challengeresult.winner}}</th>
          <th>{{challengeresult.looser}}</th>
          <th>{{challengeresult.S1W}}/{{challengeresult.S1L}}</th>
          <th>{{challengeresult.S2W}}/{{challengeresult.S2L}}</th>
          <th>{{challengeresult.S3W}}/{{challengeresult.S3L}}</th>
          <th>{{challengeresult.pointsW}}</th>
          <th>{{challengeresult.pointsL}}</th>
          <th>{{challengeresult.details}}</th>
          <th>

            <a href="#" class="icon">
              <i @click="id=challengeresult.id" class="fas fa-eye" data-toggle="modal"
                :data-target="'#challengeresultshowmodal'+challengeresult.id"></i>
            </a>
          </th>

          <!-- Show Challengeresult modal -->


          <div class="modal fade" :id="'challengeresultshowmodal'+challengeresult.id" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails match</h6><br><br>
                  <div class="signup-row">
                    <h6>Vainqueur : {{challengeresult.winner}}</h6>
                  </div>
                  <div class="signup-row">
                    <h6>Perdant : {{challengeresult.looser}}</h6>
                  </div>
                  <div class="signup-row">
                    <h6>Résultat : {{challengeresult.S1W}}/{{challengeresult.S1L}}
                      {{challengeresult.S2W}}/{{challengeresult.S2L}} {{challengeresult.S3W}}/{{challengeresult.S3L}}
                    </h6>
                  </div>
                  <div class="signup-row">
                    <h6>Points vainqueur : {{challengeresult.pointsW}}</h6>
                  </div>
                  <div class="signup-row">
                    <h6>Points perdant : {{challengeresult.pointsL}}</h6>
                  </div>
                  <div class="signup-row">
                    <h6>Détails : {{challengeresult.details}}</h6>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=challengeresult.id" data-toggle="modal"
                      :data-target="'#challengeresulteditmodal'+challengeresult.id"
                      class="btn btn-primary">Modifier</button>
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
    name: 'challengeresults',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        winner: '',
        looser: '',
        S1W: '',
        S1L: '',
        S2W: '',
        S2L: '',
        S3W: '',
        S3L: '',
        pointsW: '',
        pointsL: '',
        details: '',

      }
    },
    methods: {

      ...mapActions(['fetchAllChallengeresults', 'fetchChallengeresultById']),


    },
    computed: mapGetters(['getChallengeresultMessage', 'getAllChallengeresults', 'getChallengeresult',
      'infoChallengeresultById', 'getUpdateChallengeresultMessage'
    ]),
    created() {

      this.fetchAllChallengeresults();


    }
  }
</script>