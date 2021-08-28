<template>
  <div class="calendar">
    <h1 class="card-title">Animations et Evènements</h1>

    <p>
      Vous trouverez ici le Calendrier de toutes les animations et évènements du
      TC Us
    </p>

    <Calendarevents />
  </div>
</template>

<script>
import Calendarevents from "@/components/calendar.vue";

export default {
  name: "calendar",
  components: {
    Calendarevents,
  },
};
</script>


