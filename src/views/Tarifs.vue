<template>
  <div class="tarifs">
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col 9">
          <div class="card">
            <br>
            <h1>Tarifs année 2020/2021</h1>

            <br><br>


            <Tarifs />
            <br><br><br>
          </div>
        </div>


        <div class="col 3">
          <div class="card">

            <br><br>

            <h1>Le mot du Trésorier</h1>
            <br><br><br>
            <div v-for="content in getAllContents" :key="content.id">
              <div v-if="content.title == 'Le mot du Trésorier (page Tarifs)'">
                <div v-html="content.content"></div>
                <p>{{content.name}}</p>
                <p>{{content.fonction}}</p>
                <img :src="content.image" style="width:10rem;">

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import Tarifs from '@/components/viewtarifs.vue'
  import {
      mapActions,
      mapGetters
    } from 'vuex'

  export default {
    name: 'tarifs',
    components: {
      Tarifs,

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


      ...mapActions(['fetchAllContents']),


    },
    computed: mapGetters(['getContentMessage', 'getAllContents', 'getContent', 'infoContentById',
      'getUpdateContentMessage'
    ]),
    created() {

      this.fetchAllContents();
    }
  }
</script>
