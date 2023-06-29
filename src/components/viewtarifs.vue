<template>
  <div class="tarifs">
    <br /><br /><br />

    <h2>LICENCE FFT (Obligatoire / Assurance)</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Tarif</th>
        </tr>
      </thead>
      <tr v-for="tarif in getAllTarifs" :key="tarif.id">
        <th v-if="tarif.type == 'Licence'">{{ tarif.category }}</th>
        <th v-if="tarif.type == 'Licence'">{{ tarif.price1 }}</th>
      </tr>
    </table>

    <br /><br /><br />

    <h2>COTISATION CLUB</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Tarif</th>
        </tr>
      </thead>
      <tr v-for="tarif in getAllTarifs" :key="tarif.id">
        <th v-if="tarif.type == 'Cotisation'">{{ tarif.category }}</th>
        <th v-if="tarif.type == 'Cotisation'">{{ tarif.price1 }}</th>
      </tr>
    </table>
    <p>Réduction famille 4 pers ou + (5€ par pers)</p>

    <br /><br /><br />

    <h2>COURS (Dispensés par un Diplômé d'Etat)</h2>
    <h3>Formules complètes (Cours, licence et cotisation incluses)</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Temps/semaine</th>
          <th>45 minutes</th>
          <th>1 heure</th>
          <th>1 heure 30</th>
          <!-- <th>2 heures</th> -->
        </tr>
      </thead>
      <tr v-for="tarif in getAllTarifs" :key="tarif.id">
        <th v-if="tarif.type == 'Cours' && tarif.details !== 'Seul'">{{ tarif.category }}</th>
        <th v-if="tarif.type == 'Cours' && tarif.details !== 'Seul'">{{ tarif.price1 }}</th>
        <th v-if="tarif.type == 'Cours' && tarif.details !== 'Seul'">{{ tarif.price2 }}</th>
        <th v-if="tarif.type == 'Cours' && tarif.details !== 'Seul'">{{ tarif.price3 }}</th>
        <!-- <th v-if="tarif.type == 'Cours'">{{ tarif.details }}</th> -->
      </tr>
    </table>

    <br /><br />

    <h3>Cours seul (dans le cas d’une adhésion couple licence incluse)</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Temps/semaine</th>
          <th>1 heure</th>
          <th>1 heure 30</th>
        </tr>
      </thead>
      <tr v-for="tarif in getAllTarifs" :key="tarif.id">
        <th v-if="tarif.type == 'Cours' && tarif.details == 'Seul'">{{ tarif.category }}</th>
        <th v-if="tarif.type == 'Cours' && tarif.details == 'Seul'">{{ tarif.price1 }}</th>
        <th v-if="tarif.type == 'Cours' && tarif.details == 'Seul'">{{ tarif.price2 }}</th>
        <th v-if="tarif.type == 'Cours' && tarif.details == 'Seul'">{{ tarif.price3 }}</th>
        <!-- <th v-if="tarif.type == 'Cours' && tarif.details == 'Seul'">{{ tarif.details }}</th> -->
      </tr>
    </table>

    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions, mapGetters } from "vuex";

export default {
  name: "tarifs",
  components: {
    /*  Footer, */
  },
  data() {
    return {
      id: "",
      type: "",
      category: "",
      price1: "",
      price2: "",
      price3: "",
    };
  },
  methods: {
    ...mapActions(["fetchAllTarifs"]),
  },
  computed: mapGetters([
    "getTarifMessage",
    "getAllTarifs",
    "getTarif",
    "infoTarifById",
    "getUpdateTarifMessage",
  ]),
  created() {
    this.fetchAllTarifs();
  },
};
</script>
