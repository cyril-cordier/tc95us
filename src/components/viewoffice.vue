<template>
  <div class="products">
    <br /><br />
    <div class="container">
      <div class="grid">
        <div class="row row-col-3 row-cols-md-3 row-col-sm">
          <div v-for="office in getAllOfficeusers" :key="office.objectId">
            <div class="col">
              <div class="card">
                <div class="card-body mb-5">
                  <div  style="height: 7rem">
                    <h3 class="card-title" style="color: #1ea8ca">
                      {{ office.name }}
                    </h3>
                    <h5 class="card-text">
                      {{ office.function }}
                    </h5>
                  </div>
                  <img :src="office.image" style="height: 13rem" />
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