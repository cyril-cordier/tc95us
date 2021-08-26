<template>
  <div class="tarifs">
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col 9">
          <div class="card">
            <br />
            <div v-for="content in getAllContents" :key="content.id">
              <div v-if="content.title == 'Année tarifs (page Tarifs)'">
                <h1 v-html="content.content"></h1>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary"
              @click="downloadSubscriptionForm"
            >
              Télécharger la fiche d'inscription
            </button>

            <Tarifs />
            <br /><br /><br />
          </div>
        </div>

        <div class="col 3">
          <div class="card">
            <br /><br />

            <h1>Le mot du Trésorier</h1>
            <br /><br /><br />
            <div v-for="content in getAllContents" :key="content.id">
              <div v-if="content.title == 'Le mot du Trésorier (page Tarifs)'">
                <div v-html="content.content"></div>
                <p>{{ content.name }}</p>
                <p>{{ content.fonction }}</p>
                <img :src="content.image" style="width: 10rem" />
                <br /><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tarifs from "@/components/viewtarifs.vue";
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "tarifs",
  components: {
    Tarifs,
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
      url: "https://res.cloudinary.com/dcp7bq2a1/image/upload/v1629998680/tc95us/US21_INSCRIPTION_p3r1r1.jpg",
    };
  },
  methods: {
    ...mapActions(["fetchAllContents"]),
    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "fiche_inscription_TC_Us.jpg"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },

    downloadSubscriptionForm() {
      axios({
        method: "get",
        url: this.url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response);
        })
        .catch(() => console.log("error occured"));
    },
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
