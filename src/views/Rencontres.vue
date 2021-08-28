<template>
  <div class="rencontres">
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col 9">
          <h1 class="card-title">Championnats par Equipes</h1>

          <p>
            Vous trouverez ici les résultats des rencontres par équipes du TC Us
          </p>

          <Rencontres />
        </div>

        <div class="col 3">
          <div class="card">
            <br /><br />

            <h1 class="card-title">Le mot du Responsable des Equipes</h1>
            <br /><br /><br />
            <div v-for="content in getAllContents" :key="content.id">
              <div
                v-if="
                  content.title ==
                  'Le mot du Responsable Equipes (page Championnats)'
                "
              >
                <div v-html="content.content"></div>
                <p>{{ content.name }}</p>
                <p>{{ content.fonction }}</p>
                <img :src="content.image" style="width: 10rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rencontres from "@/components/rencontres.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "rencontres",
  components: {
    Rencontres,
  },
  data() {
    return {
      id: "",
      title: "",
      content: "",
      name: "",
      fonction: "",
      image_name: "",
      extension: "",
      image: "",
    };
  },
  methods: {
    ...mapActions(["fetchAllContents"]),
  },
  computed: mapGetters([
    "getContentMessage",
    "getAllContents",
    "getContent",
    "infoContentById",
    "getUpdateContentMessage",
  ]),
  created() {
    this.fetchAllContents();
  },
};
</script>