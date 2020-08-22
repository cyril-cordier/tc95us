<template>
  <div class="animevents">

    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col 9">
          <h1>Animations et Evènements</h1>
          <p>Vous trouverez ici les détails de toutes les animations et évènements du TC Us</p>


          <Animevents />

        </div>
        <div class="col 3">
          <div class="card">

            <br><br>

            <h1>Le mot des animateurs</h1>
            <br><br><br>
            <div v-for="content in getAllContents" :key="content.id">
              <div v-if="content.title == 'Le mot des Animateurs (page Anim et Evts)'">
                <div v-html="content.content"></div>
                <p>{{content.name}}</p>
                <p>{{content.fonction}}</p>
                <img :src="content.image" style="width:10rem;">
<br><br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Animevents from '@/components/animevents.vue'

  import {
      mapActions,
      mapGetters
    } from 'vuex'

  export default {
    name: 'animevents',
    components: {
      Animevents,

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