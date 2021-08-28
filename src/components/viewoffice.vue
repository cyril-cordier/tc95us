<template>
  <div class="products">
    <br /><br />
    <div class="container">
      <div class="grid">
        <div class="row row-col-3 row-cols-md-3 row-col-sm">
          <div v-for="office in getAllOfficeusers" :key="office.id">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title" style="color: #1ea8ca">
                    {{ office.name }}
                  </h3>
                  <h5 class="card-text">
                    {{ office.function }}
                  </h5>
                  <img :src="office.image" style="width: 10rem" />
                  <!-- <div v-for="content in getAllContents" :key="content.id">
                    <div
                      v-if="
                        (content.id == 9 && office.id == 5) ||
                        (content.id == 12 && office.id == 7) ||
                        (content.id == 10 && office.id == 9) ||
                        (content.id == 14 && office.id == 10) ||
                        (content.id == 11 && office.id == 20)
                      "
                    >
                      <div v-html="content.content"></div>
                    </div>
                  </div> -->
                  <br />
                </div>
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

/* import Footer from '@/components/footer.vue' */
import { mapActions, mapGetters } from "vuex";

export default {
  name: "products",
  components: {
    /*  Footer, */
  },
  data() {
    return {
      id: "",
      name: "",
      function: "",
      image: "",
    };
  },
  methods: {
    ...mapActions(["fetchAllOfficeusers", "fetchAllContents"]),
  },
  computed: mapGetters([
    "getOfficeuserMessage",
    "getAllOfficeusers",
    "getOfficeuser",
    "infoOfficeuserById",
    "getContentMessage",
    "getAllContents",
    "getContent",
    "infoContentById",
  ]),
  created() {
    this.fetchAllOfficeusers();
    this.fetchAllContents();
  },
};
</script>

<style scoped>
#functionname {
  color: #1ea8ca;
}
</style>