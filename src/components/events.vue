<template>
  <div class="events">
    <h1>Gestion évènements</h1>
    
                 
        
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".eventaddmodal">+ Ajouter un
      Evènement</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th>Titre</th>                
                <th>Lieu</th>
                <th>Date</th>
                <th>Horaires</th>
                <th>Prix</th>                
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(event, index) in getAllEvents" :key="event.id">
                <th>{{event.id}}</th>
                <th>{{event.title}}</th>
                <th>{{event.place}}</th>
                <th>{{event.date}}</th>
                <th>{{event.hour}}</th>
                <th>{{event.price}}</th>                
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteEvent(event.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=event.id" class="fas fa-edit" data-toggle="modal" :data-target="'#eventeditmodal'+event.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=event.id" class="fas fa-eye" data-toggle="modal" :data-target="'#eventshowmodal'+event.id"></i>
                  </a>
                </th>

              <!-- Show Event modal -->


          <div class="modal fade" :id="'eventshowmodal'+event.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails évènement</h6><br><br>
                  <div class="signup-row">
                    <h3>{{event.title}}</h3>
                  </div>
                  <div class="signup-row">
                   <p>{{event.details}}</p>
                  </div>
                  <div class="signup-row">
                   <h6>{{event.place}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>{{event.date}}</h6>
                  </div>
                  <div class="signup-row">
                   <h6>{{event.hour}}</h6>
                  </div>
                   <div class="signup-row">
                   <h6>{{event.price}}</h6>
                  </div>
                  <div class="signup-row">
                   <img :src="event.image" style="width:10rem;">
                  </div>
                  
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=event.id" data-toggle="modal" :data-target="'#eventeditmodal'+event.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Event modal -->


          <div class="modal fade" :id="'eventeditmodal'+event.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onEventEdit(event)" class="sign-back">
                  <h1>Modification évènnement</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Titre" v-model="event.title"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="event.details"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="event.place" name="" value="" placeholder="Lieu"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="event.date" name="" value="" placeholder="Date"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="event.hour" name="" value="" placeholder="Horaires"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="event.price" name="" value="" placeholder="Prix"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <input type="file" id="files" class="form-control" @change="onImageChange">
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

          <!-- Add Events modal -->


          <div class="modal fade eventaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onEventsubmit" class="sign-back" enctype="multipart/form-data">
                  <h1>Ajout évènement</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Titre" v-model="title"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="details"></textarea>
                  </div>
                  <div class="signup-row">
                    <textarea class="form-control" name="" value=""  placeholder="Lieu" v-model="place"></textarea>
                  </div>
                  <div class="signup-row">
                  <textarea class="form-control" name="" value=""  placeholder="Date" v-model="date"></textarea>
                  </div>
                  <div class="signup-row">
                  <textarea class="form-control" name="" value=""  placeholder="Horaires" v-model="hour"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price" name="" value="" placeholder="Prix"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    

                        <input type="file" id="files" class="form-control" @change="onImageChange">
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
    name: 'events',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        title: '',
        details: '',
        place: '',
        date: '',
        hour: '',
        image: '',
        price: '',
        image_name:'',
      
        
      }
    },
    methods: {

      ...mapActions(['createEvent', 'editEvent', 'fetchAllEvents', 'fetchEventById', 'deleteEvent']),
  
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



  
      onEventsubmit(e) {
        
        e.preventDefault();
        var obj = {
          'title': this.title,
          'details': this.details,
          'place': this.place,
          'date': this.date,
          'hour': this.hour,
          'price': this.price,
          'image': this.image,
          'image_name':this.image,
          

        }
        console.log(obj);
        this.createEvent(obj);
        this.fetchAllEvents();

      },
      onEventEdit(event) {
        
        //e.preventDefault();
        var obj = {
          'id':event.id,
          'title': event.title,
          'details': event.details,
          'place': event.place,
          'date': event.date,
          'hour': event.hour,
          'price': event.price,
          'image': this.image,
          'image_name': this.image,
          
        }
        this.editEvent(obj);
        this.fetchAllEvents();

      },
      onDeleteEvent(id, index) {
        this.deleteEvent(id)
        this.getAllEvents.splice(index, 1)
      },

    },
    computed: mapGetters(['getEventMessage', 'getAllEvents', 'getEvent', 'infoEventById', 'getUpdateEventMessage' ]),
    created() {

      this.fetchAllEvents();
      
      //this.fetchEventById(this.$route.params.id);
    }
  }
</script>