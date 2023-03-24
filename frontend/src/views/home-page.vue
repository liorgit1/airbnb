<template>
  <main class="home-page">
    <FilterList />
    <section class="main-hero main-layout3">
      <h1>Let your curiosity do the booking</h1>
      <button @click="flexibleClick" class="flexible">
        <h3>I'm flexible</h3>
      </button>
    </section>

    <stayList></stayList>
  </main>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import homeList from "../cmps/home-list.vue";
import FilterList from "../cmps/FilterList.vue";

// import { userService } from "../services/user-service.js";
import stayList from "../cmps/stay-list.vue";

export default {
  name: "home-page",
  computed: {
    stays() {
      this.$store.commit({ type: "setStay", stay });
    },
  },
  components: {
    appHeader,
    FilterList,
    homeList,
    
},
    stayList,
  }

</script>
