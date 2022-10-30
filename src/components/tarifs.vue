<template>
  <div class="tarifs">
    <h1>Gestion tarifs</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".tarifaddmodal">+ Ajouter un
      Tarif</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th>Catégorie</th>
                <th>Prix 1</th>
                <th>Prix 2</th>
                <th>Prix 3</th>
                <th>Détails</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tarif, index) in getAllTarifs" :key="tarif.objectId">
                <th>{{tarif.type}}</th>
                <th>{{tarif.category}}</th>
                <th>{{tarif.price1}}</th>
                <th>{{tarif.price2}}</th>
                <th>{{tarif.price3}}</th>
                <th>{{tarif.details}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteTarif(tarif.objectId, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="objectId=tarif.objectId" class="fas fa-edit" data-toggle="modal" :data-target="'#tarifeditmodal'+tarif.objectId"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="objectId=tarif.objectId" class="fas fa-eye" data-toggle="modal" :data-target="'#tarifshowmodal'+tarif.objectId"></i>
                  </a>
                </th>

              <!-- Show Tarif modal -->


          <div class="modal fade" :id="'tarifshowmodal'+tarif.objectId" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails tarif</h6><br><br>
                  <div class="signup-row">
                     
                    <h3>Type: {{tarif.type}}</h3>
                  </div>
                   
                  <div class="signup-row">
                   <h6>Catégorie: {{tarif.category}}</h6>
                  </div>
                  
                   <div class="signup-row">
                   <h6>Tarif 1: {{tarif.price1}}</h6>
                  </div>
                  
                  <div class="signup-row">
                   <h6>Tarif 2: {{tarif.price2}}</h6>
                  </div>
                  
                  <div class="signup-row">
                   <h6>Tarif 3: {{tarif.price3}}</h6>
                  </div>
                  
                  <div class="signup-row">
                   <h6>Détails: {{tarif.details}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>Importance: {{tarif.weight}}</h6>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=tarif.objectId" data-toggle="modal" :data-target="'#tarifeditmodal'+tarif.objectId" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Tarif modal -->


          <div class="modal fade" :id="'tarifeditmodal'+tarif.objectId" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onTarifEdit(tarif)" class="sign-back">
                  <h1>Modification tarif</h1>
                  <div class="signup-row">
                    Type
                    <textarea class="form-control" name="" value=""  placeholder="Type" v-model="tarif.type"></textarea>
                  </div>
                  <div class="signup-row">
                    Categorie
                    <textarea class="form-control" name="" value=""  placeholder="Catégorie" v-model="tarif.category"></textarea>
                  </div>
                  <div class="signup-row">
                    Prix 1
                    <textarea class="form-control" v-model="tarif.price1" name="" value="" placeholder="Prix 1"></textarea>
                  </div>
                  <div class="signup-row">
                    Prix 2
                    <textarea class="form-control" v-model="tarif.price2" name="" value="" placeholder="Prix 2"></textarea>
                  </div>
                  <div class="signup-row">
                    Prix 3
                    <textarea class="form-control" v-model="tarif.price3" name="" value="" placeholder="Prix 3"></textarea>
                  </div>
                  <div class="signup-row">
                    Détails
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="tarif.details"></textarea>
                  </div>
                  <div class="signup-row">
                    Importance :
                    <textarea class="form-control" name="" value=""  placeholder="Importance" v-model="tarif.weight"></textarea>
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

          <!-- Add Tarifs modal -->


          <div class="modal fade tarifaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onTarifsubmit" class="sign-back">
                  <h1>Ajout tarif</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Type" v-model="type"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Catégorie" v-model="category"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price1" name="" value="" placeholder="Prix 1"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price2" name="" value="" placeholder="Prix 2"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price3" name="" value="" placeholder="Prix 3"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="details" name="" value="" placeholder="Détails"></textarea>
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
    name: 'tarifs',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        objectId: '',
        type: '',
        category: '',
        price1: '',
        price2: '',
        price3: '',
        details: '',
        weight: 10,
      }
    },
    methods: {

      ...mapActions(['createTarif', 'editTarif', 'fetchAllTarifs', 'fetchTarifById', 'deleteTarif']),
      onTarifsubmit(e) {
        e.preventDefault();
        var obj = {
          'type': this.type,
          'category': this.category,
          'price1': this.price1,
          'price2': this.price2,
          'price3': this.price3,
          'details': this.details,
          'weight': this.weight,

        }
        this.createTarif(obj);
        this.fetchAllTarifs();

      },
      onTarifEdit(tarif) {
        //e.preventDefault();
        var obj = {
          'objectId':tarif.objectId,
          'type': tarif.type,
          'category': tarif.category,
          'price1': tarif.price1,
          'price2': tarif.price2,
          'price3': tarif.price3,
          'details': tarif.details,
          'weight': tarif.weight,

        }
        this.editTarif(obj);
        this.fetchAllTarifs();

      },
      onDeleteTarif(objectId, index) {
        this.deleteTarif(objectId)
        this.getAllTarifs.splice(index, 1)
      },

    },
    computed: mapGetters(['getTarifMessage', 'getAllTarifs', 'getTarif', 'infoTarifById', 'getUpdateTarifMessage' ]),
    created() {

      this.fetchAllTarifs();
      
      //this.fetchTarifById(this.$route.params.id);
    }
  }
</script>