<template>
  <div class="officeusers">
    <h1>Gestion Membres du bureau</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".officeuseraddmodal">+ Ajouter un
      Membre au bureau</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Nom</th>
                <th>Fonction</th>
                
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(officeuser, index) in getAllOfficeusers" :key="officeuser.id">
                <th>{{officeuser.id}}</th>
                <th>{{officeuser.name}}</th>
                <th>{{officeuser.function}}</th>
                
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteOfficeuser(officeuser.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=officeuser.id" class="fas fa-edit" data-toggle="modal" :data-target="'#officeusereditmodal'+officeuser.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=officeuser.id" class="fas fa-eye" data-toggle="modal" :data-target="'#officeusershowmodal'+officeuser.id"></i>
                  </a>
                </th>

              <!-- Show Officeuser modal -->


          <div class="modal fade" :id="'officeusershowmodal'+officeuser.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails Membre du bureau</h6><br><br>
                  <div class="signup-row">
                    <h3>{{officeuser.name}}</h3>
                  </div>
                  <div class="signup-row">
                   <h6>{{officeuser.function}}</h6>
                  </div>
                   <div class="signup-row">
                   <img :src="officeuser.image" style="width:10rem;">
                  </div>
                  
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=officeuser.id" data-toggle="modal" :data-target="'#officeusereditmodal'+officeuser.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Officeuser modal -->


          <div class="modal fade" :id="'officeusereditmodal'+officeuser.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onOfficeuserEdit(officeuser)" class="sign-back"  enctype="multipart/form-data">
                  <h1>Modification Membre du bureau</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Nom" v-model="officeuser.name"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Fonction" v-model="officeuser.function"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <input type="file" name="image" class="form-control" @change="onImageChange">
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

          <!-- Add Officeusers modal -->


          <div class="modal fade officeuseraddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onOfficeusersubmit" class="sign-back" enctype="multipart/form-data">
                  <h1>Ajout Membre du bureau</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Nom" v-model="name"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Fonction" v-model="fonction"></textarea>
                  </div>
                  <div class="signup-row">
                    <strong>Image:</strong>

                        <input type="file" name="image" class="form-control" @change="onImageChange">
                    
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
    name: 'officeusers',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        name: '',
        function: '',
        fonction:'',
        image: '',
        image_name:'',
        
        //message ?
        
      }
    },
    methods: {

      ...mapActions(['createOfficeuser', 'editOfficeuser', 'fetchAllOfficeusers', 'fetchOfficeuserById', 'deleteOfficeuser']),
      
            onImageChange(event){


var formdata = new FormData();
formdata.append("fileUpload", event.target.files[0]);



var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

 

fetch("https://www.filestackapi.com/api/store/S3?key=AKwGY2TUrQSWgxXQrp9wmz", requestOptions)
  .then(response => response.json())
  .then(result => {
    
    this.image = result.url;
      console.log(result,'ok');
      
      
      })

  .catch(error => console.log('Error image', error));
  },
      onOfficeusersubmit(e) {
        
        e.preventDefault();
        var obj = {
          'name': this.name,
          'function': this.fonction,
          'image': this.image,
          'image_name':this.image,
          
          

        }
        this.createOfficeuser(obj);
        this.fetchAllOfficeusers();

      },
      onOfficeuserEdit(officeuser) {
        
        var obj = {
          'id':officeuser.id,
          'name': officeuser.name,
          'function': officeuser.function,
          'image': this.image,
          'image_name': this.image,
          
        }
        console.log(obj);
        this.editOfficeuser(obj);
        this.fetchAllOfficeusers();

      },
      onDeleteOfficeuser(id, index) {
        this.deleteOfficeuser(id)
        this.getAllOfficeusers.splice(index, 1)
      },


    },
    computed: mapGetters(['getOfficeuserMessage', 'getAllOfficeusers', 'getOfficeuser', 'infoOfficeuserById', 'getUpdateOfficeuserMessage' ]),
    created() {

      this.fetchAllOfficeusers();
      
      //this.fetchOfficeuserById(this.$route.params.id);
    }
  }
</script>