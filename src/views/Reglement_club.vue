<template>
  <div class="equipments">
    <div class="container-fluid">
      <div class="row">
        <div>
          <br /><br />
          <h1 class="card-title">Le Règlement du Club</h1>

          <br /><br /><br />
          <div v-for="content in getAllContents" :key="content.id">
            <div v-if="content.title == 'Règlement du Club'">
              <div v-html="content.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions, mapGetters } from "vuex";

export default {
  name: "challengergt",
  components: {
    /*  Footer, */
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