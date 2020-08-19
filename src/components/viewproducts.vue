<template>
  <div class="products">
    <br><br>
    <h1>Les produits du Club</h1>
<br><br>
<div class="container">
  <div class="row row-cols-3 row-cols-md-3">
    <div v-for="(product) in getAllProducts" :key="product.id">
      
      
      
        <div class="col mb-4">
          <div class="card">

            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <br>
              <p class="card-text">{{product.details}}</p>
            </div>
            <p class="card-text"><small class="text-muted">{{product.price}}</small></p>
          </div>
        </div>

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
        image_name: '',
        extension: ''

      }
    },
    methods: {

      ...mapActions(['createProduct', 'editProduct', 'fetchAllProducts', 'fetchProductById', 'deleteProduct']),
      onImageChange(e) {
        //console.log(e.target.files[0]);
        this.image = e.target.files[0];
      },
      onProductsubmit(e) {
        let ext = this.image.name.substring(this.image.name.lastIndexOf('.') + 1);
        e.preventDefault();
        var obj = {
          'name': this.name,
          'details': this.details,
          'price': this.price,
          'image': this.image,
          'image_name': Date.now(),
          'extension': ext

        }
        this.createProduct(obj);
        this.fetchAllProducts();

      },
      onProductEdit(product) {
        let ext = this.image.name.substring(this.image.name.lastIndexOf('.') + 1);
        //e.preventDefault();
        var obj = {
          'id': product.id,
          'name': product.name,
          'details': product.details,
          'price': product.price,
          'image': product.image,
          'image_name': Date.now(),
          'extension': ext
        }
        this.editProduct(obj);
        this.fetchAllProducts();

      },
      onDeleteProduct(id, index) {
        this.deleteProduct(id)
        this.getAllProducts.splice(index, 1)
      },

    },
    computed: mapGetters(['getProductMessage', 'getAllProducts', 'getProduct', 'infoProductById',
      'getUpdateProductMessage'
    ]),
    created() {

      this.fetchAllProducts();

      //this.fetchProductById(this.$route.params.id);
    }
  }
</script>