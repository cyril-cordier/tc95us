<template>
  <div class="products">
    <h1>Gestion produits</h1>
    
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".productaddmodal">+ Ajouter un
      Produit</button>
          <table class="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Détail</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, index) in getAllProducts" :key="product.objectId">
                <th>{{product.name}}</th>
                <th>{{product.details}}</th>
                <th>{{product.price}}</th>
                
                <th>
                  <a href="#" class="icon">
                    <i v-on:click="onDeleteProduct(product.objectId, index)" class="fa fa-trash"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="objectId=product.objectId" class="fas fa-edit" data-toggle="modal" :data-target="'#producteditmodal'+product.objectId"></i>
                  </a> |
                  <a href="#" class="icon">
                    <i  @click="objectId=product.objectId" class="fas fa-eye" data-toggle="modal" :data-target="'#productshowmodal'+product.objectId"></i>
                  </a>
                </th>

              <!-- Show Product modal -->
          <div class="modal fade" :id="'productshowmodal'+product.objectId" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form class="sign-back">
                  <h6>Détails produit</h6><br><br>
                  <div class="signup-row">
                    <h3>{{product.name}}</h3>
                  </div>
                  <div class="signup-row">
                   <h6>{{product.details}}</h6>
                  </div>
                   <div class="signup-row">
                   <img :src="product.image" style="width:10rem;">
                  </div>
                  <div class="signup-row">
                    Importance : <h6>{{ product.weight }}</h6>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button @click="objectId=product.objectId" data-toggle="modal" :data-target="'#producteditmodal'+product.objectId" class="btn btn-primary">Modifier</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

           <!-- Edit Product modal -->
          <div class="modal fade" :id="'producteditmodal'+product.objectId" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit.prevent="onProductEdit(product)" class="sign-back">
                  <h1>Modification produit</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Nom" v-model="product.name"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="product.details"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="product.price" name="" value="" placeholder="Prix"></textarea>
                  </div>
                  <div class="signup-row">
                      <label for="importance">Importance</label>
                        <input
                        id="importance"
                        class="form-control"
                        v-model="product.weight"
                        name=""
                        value=""
                        placeholder="Poids"
                      />
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

          <!-- Add Products modal -->


          <div class="modal fade productaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form @submit="onProductsubmit" class="sign-back" enctype="multipart/form-data">
                  <h1>Ajout produit</h1>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value="" placeholder="Nom" v-model="name"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" name="" value=""  placeholder="Détails" v-model="details"></textarea>
                  </div>
                  <div class="signup-row">
                    
                    <textarea class="form-control" v-model="price" name="" value="" placeholder="Prix"></textarea>
                  </div>
                  <div class="signup-row">

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
    name: 'products',
    components: {
      /*  Footer, */


    },
    data() {
      return {
        id: '',
        name: '',
        details: '',
        price: '',
        image: '',
        weight: "",        
      }
    },
    methods: {

      ...mapActions(['createProduct', 'editProduct', 'fetchAllProducts', 'fetchProductById', 'deleteProduct']),
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
      
      onProductsubmit(e) {
        
        e.preventDefault();
        var obj = {
          name: this.name,
          details: this.details,
          price: this.price,
          image: this.image,
          weight: this.weight
        }
        this.createProduct(obj);
        this.fetchAllProducts();

      },
      onProductEdit(product) {
        
        //e.preventDefault();
        var obj = {
          objectId: product.objectId,
          name: product.name,
          details: product.details,
          price: product.price,
          image: this.image ? this.image : product.image,
          weight: product.weight
        }
        this.editProduct(obj);
        this.fetchAllProducts();

      },
      onDeleteProduct(objectId, index) {
        this.deleteProduct(objectId)
        this.getAllProducts.splice(index, 1)
      },

    },
    computed: mapGetters(['getProductMessage', 'getAllProducts', 'getProduct', 'infoProductById', 'getUpdateProductMessage' ]),
    created() {

      this.fetchAllProducts();
      
      //this.fetchProductById(this.$route.params.id);
    }
  }
</script>