<template>
  <div class="equipments">

    <div class="container-fluid">
      <div class="row">
        <div class="col-9">
          <br><br>
          <h1>Nos installations</h1>

          <br><br>



          <br><br><br>
          <div v-for="(content) in getAllContents" :key="content.id">
            <div v-if="content.title == 'Les installations'">
              <div v-html="content.content"></div>
            </div>
          </div>

        </div>

        <div class="col-3 bg-light">
          <br><br><br>

          <h1>le mot du Président</h1>
          <br><br><br>
          <div v-for="content in getAllContents" :key="content.id">
            <div v-if="content.title == 'Le mot du Président (page Installations)'">
              <div v-html="content.content"></div>
              <p>{{content.name}}</p>
              <p>{{content.fonction}}</p>

            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

</template>

<script>
  // @ is an alias to /src


  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'challengergt',
    components: {
      /*  Footer, */


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

      //this.fetchEventById(this.$route.params.id);
    }
  }
</script>