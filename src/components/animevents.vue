<template>
  <div class="animevents">

   <router-link to="/calendrier_events">Voir le calendrier des évennements</router-link>

    


    <br><br><br>
    <div v-for="(event) in getAllEvents" :key="event.id">
      <div class="card">
        <div class="card-header">
          <h3>{{event.title}}</h3>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>{{event.details}}</p>
            <footer class="blockquote-footer">{{event.place}} / {{event.date}} / {{event.hour}} - <cite
                title="Source Title">{{event.price}}</cite></footer>
          </blockquote>
        </div>
      </div><br><br>
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
    name: 'animevents',
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
        price: '',
        image: '',
        image_name: '',
        extension: ''

      }
    },
    methods: {


      ...mapActions(['fetchAllEvents']),


    },
    computed: mapGetters(['getEventMessage', 'getAllEvents', 'getEvent', 'infoEventById', 'getUpdateEventMessage']),
    created() {

      this.fetchAllEvents();

      //this.fetchEventById(this.$route.params.id);
    }
  }
</script>