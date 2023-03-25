<template>
  <main class="home-page">
    <stay-list :stays="stays"/>
  </main>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import stayList from "../cmps/StayList.vue";
import FilterList from "../cmps/FilterList.vue";



export default {
  name: "StayIndex",
 created() {
  this.$store.dispatch({type:'loadStays'})
 },
  computed: {
    stays() {
      return this.$store.getters.stays 
    },
  },
  components: {
    appHeader,
    FilterList,
    stayList,
    
},
};
</script>
