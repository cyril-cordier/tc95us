<template>
  <div class="products">
    
<br><br>
<div class="container">
  <div class="grid">
  <div class="row row-col-3 row-cols-md-3 row-col-sm">
    <div v-for="(office) in getAllOfficeusers" :key="office.id">
      
      
      
        <div class="col">
          <div class="card">

            <div class="card-body">
              <h3 class="card-title">{{office.name}}</h3>
              <h5 class="card-text">{{office.function}}</h5>
              <img :src="office.image" style="width:10rem;">
              <br>
              
            </div>
            
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
        function: '',
        image: '',


      }
    },
    methods: {

      ...mapActions(['fetchAllOfficeusers']),
      

    },
    computed: mapGetters(['getOfficeuserMessage', 'getAllOfficeusers', 'getOfficeuser', 'infoOfficeuserById',
    ]),
    created() {

      this.fetchAllOfficeusers();

      
    }
  }
</script>