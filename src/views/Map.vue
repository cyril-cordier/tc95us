<template>
  <div class="map">
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col 9">
          <div class="card">
            <Map msg="Contact et plan d'accès" />
          </div>
        </div>
        <div class="col 3">
          <div class="card">
            <br /><br />

            <h1 class="card-title">Le mot de la Secrétaire</h1>
            <br /><br /><br />
            <div v-for="content in getAllContents" :key="content.id">
              <div
                v-if="
                  content.title == 'Le mot de la Secrétaire (page Nous trouver)'
                "
              >
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
// @ is an alias to /src
import Map from "@/components/carte.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "map",
  components: {
    /*  Footer, */
    Map,
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

    //this.fetchEventById(this.$route.params.id);
  },
};
</script>

<style scoped>
#logotcus {
  position: absolute;
  top: 3%;
  margin: 32%;
}
</style>