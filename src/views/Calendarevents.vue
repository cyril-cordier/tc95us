<template>
  <div class="calendar">
    <h1>Animations et Evennements</h1>

    <p>Vous trouverez ici le Calendrier de toutes les animations et évennements du TC Us</p>

  
<Calendarevents/>
  
  </div>

</template>

<script>
import Calendarevents from '@/components/calendar.vue'


export default {
  name: 'calendar',
  components: {
    Calendarevents, 
    
  }
}
</script>


