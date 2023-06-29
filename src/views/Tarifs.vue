<template>
  <div class="tarifs">
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col 9">
          <div class="card">
            <br />
            <div v-for="content in getAllContents" :key="content.id">
              <div v-if="content.title == 'Année tarifs (page Tarifs)'">
                <h1 class="card-title" v-html="content.content"></h1>
              </div>
            </div>
            <h3>Téléchargement des documents d'inscription</h3>
            <div class="col 6">
              <button
                type="button"
                class="btn btn-primary mx-2 my-2"
                @click="downloadSubscriptionForm"
              >
                Fiche d'inscription
              </button>
              <a
                class="footer-link"
                href="https://www.fft.fr/sites/default/files/documents/modele_certificat_medical_0%20(1).pdf_0.pdf"
                target="blank"
                ><button type="button" class="btn btn-primary mx-2 my-2">
                  Modèle de certificat médical FFT
                </button></a
              >
            </div>
            <div class="col 6">
               <a
                class="footer-link"
                href="https://www.fft.fr/sites/default/files/documents/QUESTIONNAIRE%20DE%20SANTE%20MINEURS.pdf"
                target="blank"
                ><button type="button" class="btn btn-info mx-2 my-1">
                  Questionnaire santé (mineurs)
                </button></a
              >
              <a
                class="footer-link"
                href="https://www.fft.fr/sites/default/files/documents/modele_attestation_mineur.pdf.pdf"
                target="blank"
                ><button type="button" class="btn btn-info mx-2 my-1">
                  Attestation questionnaire de santé (mineurs)
                </button></a
              >
            </div>
            
            <Tarifs />
            <br /><br /><br />
          </div>
        </div>

        <div class="col 3">
          <div class="card">
            <br /><br />

            <h1 class="card-title">Le mot du Trésorier</h1>
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
      url: "https://res.cloudinary.com/dcp7bq2a1/image/upload/v1688026593/tc95us/US23_INSCRIPTION_b0qoom.jpg",
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
