<template>
  <div class="accueil">
    <br /><br />
    <h1 class="card-title">{{ msg }}</h1>
    <br /><br />
    <div class="card-deck">
      <div class="card col-sm-12 col-md-8">
        <div class="card-body">
          <h2 class="card-title">Actualités</h2>
          <div
            class="my-2"
            v-for="content in getAllContents.slice().reverse()"
            :key="content.id"
          >
            <div v-if="content.title == 'Texte page Accueil'">
              <div v-html="content.content"></div>

              <p class="card-text">
                <small class="text-muted">{{ content.name }}</small>
              </p>
              <img :src="content.image" style="width: 15rem" />
              <hr class="my-4" />
            </div>
          </div>
        </div>
      </div>
      <div class="card col-sm-12 col-md-4">
        <div class="card-body">
          <h5 class="card-title">
            <a
              href="https://www.facebook.com/groups/406488439536879"
              target="blank"
              >Rejoignez le Tennis Club de Us sur Facebook</a
            >
          </h5>
          <div
            class="fb-group"
            data-href="https://www.facebook.com/groups/406488439536879"
            data-width="280"
            data-show-social-context="true"
            data-show-metadata="true"
          >
            <blockquote
              cite="https://www.facebook.com/groups/406488439536879"
              class="fb-xfbml-parse-ignore"
            >
              Tennis Club d&#039;Us
            </blockquote>
          </div>
          <hr class="my-4" />
          <h5 class="card-title">Quel temps fait-il sur nos courts ?</h5>
          <iframe
            src="https://fr.tutiempo.net/s-widget/full/42145/ca5"
            scrolling="no"
            frameborder="0"
            style="border: none; overflow: hidden; width: 100%; height: 500px"
            allowTransparency="true"
          ></iframe>
          <p class="card-text">
            <small class="text-muted"
              >Votre météo locale à Us, toujours à jour !</small
            >
          </p>
        </div>
      </div>
    </div>

    <img
      alt="Bureau TC Us"
      src="../assets/bureau_small.jpg"
      style="width: 80%; margin-bottom: 1rem"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Accueil",
  props: {
    msg: String,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #c95a1b;
}
</style>
