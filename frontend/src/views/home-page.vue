<template>
  <main class="home-page">

    <stayList></stayList>
  </main>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
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
    stayList,
  },
};
</script>
