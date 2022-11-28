<template>
  <div class="products">
    <br><br>
    <h1>Les produits du Club</h1>
<br><br>
<div class="container">
  <div class="grid">
  <div class="row row-col-3 row-cols-md-3 row-col-sm">
    <div v-for="(product) in getAllProducts" :key="product.objectId">
      
      
      
        <div class="col">
          <div class="card">

            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <img :src="product.image" style="width:10rem;">
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

      }
    },
    methods: {

      ...mapActions(['createProduct', 'editProduct', 'fetchAllProducts', 'fetchProductById', 'deleteProduct']),
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