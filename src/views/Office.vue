<template>
  <div class="challenge">
    <br /><br />
    <h1 class="card-title">Les membres du Bureau du TC Us</h1>

    <Office />
    <br /><br />
  </div>
</template>

<script>
import Office from "@/components/viewoffice.vue";

export default {
  name: "office",
  components: {
    Office,
  },
};
</script>

