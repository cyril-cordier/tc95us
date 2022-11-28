<template>
  <div class="championnats">
    <h1>Gestion championnat</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".championnataddmodal">+ Ajouter une 
            Rencontre</button>
          <table class="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Competition</th>
                <th>Rencontre</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(championnat, index) in getAllChampionnats" :key="championnat.objectId">
                <th>{{championnat.date}}</th>
                <th>{{championnat.competition}}</th>
                <th>{{championnat.match}}</th>
                <th>{{championnat.score}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteChampionnat(championnat.objectId, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="objectId=championnat.objectId" class="fas fa-edit" data-toggle="modal" :data-target="'#championnateditmodal'+championnat.objectId"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="objectId=championnat.objectId" class="fas fa-eye" data-toggle="modal" :data-target="'#championnatshowmodal'+championnat.objectId"></i>
                  </a>
                </th>

              <!-- Show Championnat modal -->


          <div class="modal fade" :id="'championnatshowmodal'+championnat.objectId" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails rencontre</h6><br><br>
                  <div class="signup-row">
                    Date : <h3>{{championnat.date}}</h3>
                  </div>
                  <div class="signup-row">
                   Competition : <h6>{{championnat.competition}}</h6>
                  </div>
                   <div class="signup-row">
                   Rencontre : <h6>{{championnat.match}}</h6>
                  </div>
                  <div class="signup-row">
                   Score : <h6>{{championnat.score}}</h6>
                  </div>
                  <div class="signup-row">
                    Importance : <h6>{{ championnat.weight }}</h6>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="objectId=championnat.objectId" data-toggle="modal" :data-target="'#championnateditmodal'+championnat.objectId" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Championnat modal -->


          <div class="modal fade" :id="'championnateditmodal'+championnat.objectId" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onChampionnatEdit(championnat)" class="sign-back">
                  <h1>Modification Rencontre</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Date" v-model="championnat.date"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Compétition" v-model="championnat.competition"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="championnat.match" name="" value="" placeholder="Rencontre"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" v-model="championnat.score" name="" value="" placeholder="score"></textarea>
                  </div>
                  <div class="form-group col-md-2">

                    <label for="importance">Importance</label>
                        <input
                        id="importance"
                        class="form-control"
                        v-model="championnat.weight"
                        name=""
                        value=""
                        placeholder="Poids"
                      />
                    </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
              </tr>
            </tbody>
          </table>

          <!-- Add Championnats modal -->


          <div class="modal fade championnataddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onChampionnatsubmit" class="sign-back">
                  <h1>Ajout Rencontre</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Date" v-model="date"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Compétition" v-model="competition"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="match" name="" value="" placeholder="Rencontre"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <input type="text" class="form-control" v-model="score" name="" value="" placeholder="Score">
                  </div>
                  <div class="form-group col-md-2">
                    <label for="importance">Importance</label>
                      <input
                      id="importance"
                      class="form-control"
                      v-model="weight"
                      name=""
                      value=""
                      placeholder="Poids"
                    />
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button type="submit" class="btn btn-primary" >Enregistrer</button>
                  </div>
                </form>
              </div>
            </div>
          </div>


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
    name: 'championnats',
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
        weight: "",
      }
    },
    methods: {

      ...mapActions(['createChampionnat', 'editChampionnat', 'fetchAllChampionnats', 'fetchChampionnatById', 'deleteChampionnat']),
      onChampionnatsubmit(e) {
        e.preventDefault();
        var obj = {
          date: this.date,
          competition: this.competition,
          match: this.match,
          score: this.score,
          weight: this.weight

        }
        this.createChampionnat(obj);
        this.fetchAllChampionnats();

      },
      onChampionnatEdit(championnat) {
        //e.preventDefault();
        var obj = {
          objectId:championnat.objectId,
          date: championnat.date,
          competition: championnat.competition,
          match: championnat.match,
          score: championnat.score,
          weight: championnat.weight

        }
        this.editChampionnat(obj);
        this.fetchAllChampionnats();

      },
      onDeleteChampionnat(objectId, index) {
        this.deleteChampionnat(objectId)
        this.getAllChampionnats.splice(index, 1)
      },

    },
    computed: mapGetters(['getChampionnatMessage', 'getAllChampionnats', 'getChampionnat', 'infoChampionnatById', 'getUpdateChampionnatMessage' ]),
    created() {

      this.fetchAllChampionnats();
      
      //this.fetchChampionnatById(this.$route.params.id);
    }
  }
</script>