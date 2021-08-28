<template>
  <div class="map">
    <br /><br />
    <h1 class="card-title">{{ msg }}</h1>
    <br />
    <p class="card-text">
      <strong>Tennis Club de Us</strong><br />
      jardin public (RD 28)<br />
      95450 Us<br />
      <button
        v-show="phone_button_toggle"
        @click="
          (phone_toggle = !phone_toggle),
            (phone_button_toggle = !phone_button_toggle)
        "
        class="btn btn-outline-info my-2"
      >
        Contacter le club par téléphone
      </button>
      <a href="tel:0642093035" v-show="phone_toggle">06 42 09 30 35</a><br />

      <button
        v-show="email_button_toggle"
        @click="
          (email_toggle = !email_toggle),
            (email_button_toggle = !email_button_toggle)
        "
        class="btn btn-outline-info mt-2"
      >
        Contacter le club par email
      </button>
      <a href="mailto:tc95us@gmail.com" v-show="email_toggle"
        >tc95us@gmail.com</a
      >
    </p>
    <br />

    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        class="embed-responsive-item"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3489.69034040954!2d1.9730069!3d49.1024893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f3f5f0ef77d1%3A0x8f51e93f41f5e8cb!2sTennis%20Club%20de%20Us!5e1!3m2!1sfr!2sfr!4v1598088797864!5m2!1sfr!2sfr"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    msg: String,
  },
  data() {
    return {
      email_toggle: false,
      email_button_toggle: true,
      phone_toggle: false,
      phone_button_toggle: true,
    };
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
/* a {
  color: #42b983;
} */
.partenaires {
  display: block;
  margin: 100px;
  margin-left: auto;
  margin-right: auto;
}
.logopart {
  margin: 1rem;
}
#nav a.router-link-exact-active {
  color: #1ea8ca;
}
</style>
