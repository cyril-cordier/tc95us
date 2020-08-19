<template>
  <div class="challengergt">

   <!-- <router-link to="/calendrier_events">Voir le calendrier des évennements</router-link> -->

    <br><br><br>
<div v-for="(content) in getAllContents" :key="content.id">
<div v-if="content.title == 'Règlement du Challenge'"><div v-html="content.content"></div>
</div>
</div>

    
<router-view/>
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
        image_name:'',
        extension:'',
        image: '',   

      }
    },
    methods: {


      ...mapActions(['fetchAllContents']),


    },
    computed: mapGetters(['getContentMessage', 'getAllContents', 'getContent', 'infoContentById', 'getUpdateContentMessage']),
    created() {

      this.fetchAllContents();

      //this.fetchEventById(this.$route.params.id);
    }
  }
</script>