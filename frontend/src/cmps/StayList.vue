<template>
  <ul class="stay-list">
    <stay-preview
      v-for="stay in stays"
      :stay="stay"
      :key="stay._id"
    ></stay-preview>
  </ul>
</template>

<script>
import stayPreview from "./StayPreview.vue";

export default {
  name: "stay-list",
  props: {
    stays: {
      type: Array,
    },
  },
  components: {
    stayPreview,
  },
  methods: {
    goToStay(stay) {
      this.filterBy.country = stay;
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
      this.$router.push(`/stay`);
      window.scrollTo(0, 0);
    },
  },
};
</script>

