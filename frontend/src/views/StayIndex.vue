<template>
  <!-- class="main-layout" -->
  <section >
    <FilterList />
  <main class="home-page main-layout">
    <stay-list
    @getStay="getStay"  
    :stays="stays" 
    />
  </main>
</section>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import stayList from "../cmps/StayList.vue";
import FilterList from "../cmps/FilterList.vue";



export default {
  name: "StayIndex",
  created() {
    this.$store.dispatch({ type: 'loadStays' })
  },
  methods: {
    getStay({stayId}){
      this.$router.push( '/stay/' + stayId)
    },
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
