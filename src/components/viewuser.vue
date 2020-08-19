<template>
  <div class="users">
    <h1>Mes informations</h1>
    
          <table class="table">
            <thead>
              <tr>
                
                <th scope="col">Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Nom pour Challenge</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in getUser" :key="user.id">
                
                <th>{{user.lastname}}</th>
                <th>{{user.firstname}}</th>
                <th>{{user.email}}</th>
                <th>{{user.challengename}}</th>
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDelete(user.id, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=user.id" class="fas fa-edit" data-toggle="modal" :data-target="'#usereditmodal'+user.id"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="id=user.id" class="fas fa-eye" data-toggle="modal" :data-target="'#usershowmodal'+user.id"></i>
                  </a>
                </th>
<!-- Show User modal -->


          <div class="modal fade" :id="'usershowmodal'+user.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onEdit(user)" class="sign-back">
                  <h6>Detail Utilisateur</h6>
                  <div class="signup-row">
                    <h3>{{user.firstname}} {{user.lastname}}</h3>
                  </div>
                  <div class="signup-row">
                    <h6>{{user.email}}</h6>
                  </div>
                  <div class="signup-row">
                    <h6>Nom pour challenge :{{user.challengename}}</h6>
                  </div>


                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="id=user.id" data-toggle="modal" :data-target="'#usereditmodal'+user.id" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <!-- Edit User modal -->


          <div class="modal fade" :id="'usereditmodal'+user.id" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onEdit(user)" class="sign-back">
                  <h1>Modification Utilisateur</h1>
 
                  <div class="signup-row">
                    <i class="fa fa-user"></i>
                    <label>Prénom</label>
                    <input type="text" name="" value="" placeholder="Prénom" v-model="user.firstname">
                  </div>
                  <div class="signup-row">
                    <i class="fa fa-user"></i>
                    <label>Nom</label>
                    <input type="text" name="" value="" placeholder="Nom" v-model="user.lastname">
                  </div>
                  
                  <div class="signup-row">
                    <i class="fa fa-envelope"></i>
                    <label>Email</label>
                    <input type="text" v-model="user.email" name="" value="" placeholder="Email">
                  </div>
                  <div class="signup-row">
                    <i class="fa fa-user"></i>
                    <label>Pseudo </label>
                    <input type="text" name="" value="" placeholder="Pseudo pour le Challenge" v-model="user.challengename">
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
    name: 'users',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id:'',
        lastname: '',
        firstname: '',
        email: '',
        challengename: '',
        password: '',
        c_password: '',
        editUser: {
          'id': '',
          'lastname': '',
          'firstname': '',
          'email': '',
          'challengename': ''

        }
      }
    },
    methods: {

      ...mapActions(['fetchUser', 'fetchUserById', 'deleteUser', 'editForm']),
      onsubmit() {
        //e.preventDefault();
        var obj = {
          'firstname': this.firstname,
          'lastname': this.lastname,
          'challengename': this.challengename,
          'email': this.email,
          'password': this.password,
          'c_password': this.c_password,

        }
        this.registerForm(obj);
        this.fetchUser();

      },
      onEdit(user) {
        //e.preventDefault();
        var obj = {
          'id':user.id,
          'firstname': user.firstname,
          'lastname': user.lastname,
          'email': user.email,
          'challengename': user.challengename
        }
        this.editForm(obj);
        this.fetchUser();

      },
      onDelete(id, index) {
        this.deleteUser(id)
        this.getUser.splice(index, 1)
      },

    },
    computed: mapGetters(['getMessage', 'getUser', 'infoUserById', ]),
    created() {

      
      this.fetchUser();
     
    }
  }
</script>