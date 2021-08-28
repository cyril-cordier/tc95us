<template>
  <div class="home">
    <img alt="Tc Us" src="../assets/bg-tennis3.jpg" style="width: 100%" />
    <!-- <img alt="Tc Us" src="../assets/bandeau_tcus.jpg" style="width: 100%" /> -->
    <!-- <img alt="Tc Us" src="../assets/bandeau_tcus2.jpg" style="width: 100%" /> -->

    <Accueil class="card-title" msg="Bienvenue sur le site du TC Us" />
  </div>
</template>

<script>
// @ is an alias to /src
import Accueil from "@/components/accueil.vue";

export default {
  name: "Home",
  components: {
    Accueil,
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