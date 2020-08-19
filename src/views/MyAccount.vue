<template>
  <div class="MyAccount">
    <h1>Mon compte</h1>

    <div class="container-fluid">
      <div class="row">
        <div class="col-3">

          <li class="list-group">
            <ul @click="users_toggle = !users_toggle, 
            products_toggle = false,
            events_toggle = false,   
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            contents_toggle = false,
            officeusers_toggle = false,
            championships_toggle = false, 
            tarifs_toggle = false" class="List-group-item list-group-item-action">Mes informations
            </ul>
            <ul class="List-group-item list-group-item-action" @click="products_toggle = !products_toggle, 
            users_toggle = false,
            events_toggle = false, 
            challengeusers_toggle = false,
            challengeresults_toggle = false,
            championships_toggle = false, 
            contents_toggle = false,
            officeusers_toggle = false,
            tarifs_toggle = false">
              Les Produits du Club
            </ul>

            <ul class="List-group-item list-group-item-action" @click="challengeusers_toggle = !challengeusers_toggle, 
            products_toggle = false,
            events_toggle = false, 
            users_toggle = false, 
            challengeresults_toggle = false,
            championships_toggle = false, 
            contents_toggle = false,
            officeusers_toggle = false,
            tarifs_toggle = false">
              Les Joueurs du Challenge
            </ul>
            <ul class="List-group-item list-group-item-action" @click="challengeresults_toggle = !challengeresults_toggle, 
            products_toggle = false,
            events_toggle = false, 
            challengeusers_toggle = false, 
            users_toggle = false,
            contents_toggle = false,
            championships_toggle = false, 
            officeusers_toggle = false,
            tarifs_toggle = false">
              Résultats du Challenge
            </ul>

          </li>
        </div>

        <div class="col-9 bg-light" v-show="users_toggle">
          <viewuser />
        </div>

        <div class="col-9 bg-light" v-show="products_toggle">
          <viewproducts />
        </div>
        <div class="col-9 bg-light" v-show="events_toggle">
          <events />
        </div>

        <div class="col-9 bg-light" v-show="challengeusers_toggle">
          <viewchallengeusers />
        </div>
        <div class="col-9 bg-light" v-show="challengeresults_toggle">
          <viewchallengeresults />
        </div>
        <div class="col-9 bg-light" v-show="championships_toggle">
          <championnats />
        </div>
        <div class="col-9 bg-light" v-show="tarifs_toggle">
          <tarifs />
        </div>
        <div class="col-9 bg-light" v-show="contents_toggle">
          <contents />
        </div>
        <div class="col-9 bg-light" v-show="officeusers_toggle">
          <officeusers />
        </div>
      

      </div>



    </div>
  </div>


</template>

<script>
  // @ is an alias to /src

  import viewuser from '@/components/viewuser.vue'
  import viewproducts from '@/components/viewproducts.vue'

  import viewchallengeusers from '@/components/viewchallengeusers.vue'
  import viewchallengeresults from '@/components/viewchallengeresults.vue'


  /* import Footer from '@/components/footer.vue' */


  export default {
    name: 'MyAccount',
    components: {
      /*  Footer, */
      viewuser,
      viewproducts, 
      viewchallengeusers, 
      viewchallengeresults, 





    },
    data() {
      return {
        
        users_toggle: true,
        products_toggle: false,

        challengeusers_toggle: false,
        challengeresults_toggle: false,

        
      }
    },
   
  }
</script>