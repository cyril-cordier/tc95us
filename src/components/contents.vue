<template>
  <div class="contents">
    <h1>Gestion contenus</h1>



    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".contentaddmodal">+ Ajouter un
      Contenu</button>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th>Titre</th>
          <th>Nom</th>
          <th>Fonction</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(content, index) in getAllContents" :key="content.id">
          <th>{{content.id}}</th>
          <th>{{content.title}}</th>
          <th>{{content.name}}</th>
          <th>{{content.fonction}}</th>
          
          <th>
            <a href="#" class="icon">
              <i v-on:click="onDeleteContent(content.id, index)" class="fa fa-trash"></i>
            </a> |
            <a href="#" class="icon">
              <i @click="id=content.id" class="fas fa-edit" data-toggle="modal"
                :data-target="'#contenteditmodal'+content.id"></i>
            </a> |
            <a href="#" class="icon">
              <i @click="id=content.id" class="fas fa-eye" data-toggle="modal"
                :data-target="'#contentshowmodal'+content.id"></i>
            </a>
          </th>

          <!-- Show Content modal -->


          <div class="modal fade" :id="'contentshowmodal'+content.id" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails content</h6><br><br>
                  <div class="signup-row">
                    <h3>{{content.title}}</h3>
                  </div>
                  <div class="signup-row">
                    <div v-html="content.content"></div>
                  </div>
                  <div class="signup-row">
                    <h6>{{content.name}}</h6>
                  </div>
                  <div class="signup-row">
                    <h6>{{content.fonction}}</h6>
                  </div>
                  <div class="signup-row">
                    <img :src="content.image" style="width:10rem;">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=content.id" data-toggle="modal" :data-target="'#contenteditmodal'+content.id"
                      class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Edit Content modal -->


          <div class="modal fade" :id="'contenteditmodal'+content.id" tabindex="-1" role="dialog"
            aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onContentEdit(content)" class="sign-back">
                  <h1>Modification contenu</h1>
                  <div class="signup-row">

                    <textarea class="form-control" name="" value="" placeholder="Titre"
                      v-model="content.title"></textarea>
                  </div>
                  <div class="signup-row">
                    <vue-editor v-model="content.content" placeholder="Contenu"></vue-editor>
                    <!-- <textarea class="form-control" name="" value=""  placeholder="Contenu" v-model="content.content"></textarea> -->
                  </div>
                  <div class="signup-row">

                    <textarea class="form-control" v-model="content.name" name="" value="" placeholder="Nom"></textarea>
                  </div>
                  <div class="signup-row">

                    <textarea class="form-control" v-model="content.fonction" name="" value=""
                      placeholder="Fonction"></textarea>
                  </div>
                  <div class="signup-row">
                    <strong>Image:</strong>

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

    <!-- Add Contents modal -->


    <div class="modal fade contentaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <form @submit="onContentsubmit" class="sign-back" enctype="multipart/form-data">
            <h1>Ajout content</h1>
            <div class="signup-row">
              <div class="form-group col-md-4">
                <label for="title">Choix du contenu</label>
                <select id="title" class="form-control" v-model="title">
                  <option selected></option>
                  <option>Texte page Accueil</option>
                  <option>Les installations</option>
                  <option>Règlement du Club</option>
                  <option>Année tarifs (page Tarifs)</option>
                  <option>Le mot du Président (page Installations)</option>
                  <option>Le mot du Trésorier (page Tarifs)</option>
                  <option>Le mot de la Secrétaire (page Nous trouver)</option>
                  <option>Le mot du Responsable Equipes (page Championnats)</option>
                  <option>Le mot des Animateurs (page Anim et Evts)</option>
                  <option>Expérience de Challenger (page rglt challenge)</option>
                  <option>Règlement du Challenge (page rglt challenge)</option>
                </select>
              </div>
              <!-- <textarea class="form-control" name="" value="" placeholder="Titre" ></textarea> -->
            </div>
            <div class="signup-row">
              <vue-editor v-model="content" placeholder="Contenu"></vue-editor>
              <!-- <textarea class="form-control" name="" value=""  placeholder="Contenu" v-model="content"></textarea> -->
            </div>
            <div class="signup-row">

              <textarea class="form-control" v-model="name" name="" value="" placeholder="Nom"></textarea>
            </div>
            <div class="signup-row">

              <textarea class="form-control" v-model="fonction" name="" value="" placeholder="Fonction"></textarea>
            </div>
            <div class="signup-row">

              <strong>Image:</strong>

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










  </div>



</template>

<script>
  // @ is an alias to /src

  import {
    VueEditor
  } from "vue2-editor";
  /* import Footer from '@/components/footer.vue' */
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'contents',
    components: {
      /*  Footer, */
      VueEditor


    },
    data() {
      return {
        id: '',
        title: '',
        content: '',
        name: '',
        fonction: '',
        image_name: '',
        extension: '',
        image: '',
      }
    },
    methods: {

      ...mapActions(['createContent', 'editContent', 'fetchAllContents', 'fetchContentById', 'deleteContent']),
      onImageChange(event) {
        
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
      onContentsubmit(e) {
        
        e.preventDefault();
        var obj = {
          'title': this.title,
          'content': this.content,
          'name': this.name,
          'fonction': this.fonction,
          'image': this.image,
          'image_name': this.image,
          

        }
        console.log(obj);
        this.createContent(obj);
        this.fetchAllContents();

      },
      onContentEdit(content) {
        
        
        var obj = {
          'id': content.id,
          'title': content.title,
          'content': content.content,
          'name': content.name,
          'fonction': content.fonction,
          'image': this.image,
          'image_name': this.image,
          
        }
        this.editContent(obj);
        this.fetchAllContents();

      },
      onDeleteContent(id, index) {
        this.deleteContent(id)
        this.getAllContents.splice(index, 1)
      },

    },
    computed: mapGetters(['getContentMessage', 'getAllContents', 'getContent', 'infoContentById',
      'getUpdateContentMessage'
    ]),
    created() {

      this.fetchAllContents();

      //this.fetchContentById(this.$route.params.id);
    }
  }
</script>