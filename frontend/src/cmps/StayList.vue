<template>
  <ul class="stay-list">
    <stay-preview
    @click="getStay(stay._id)"
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
    getStay(stayId){
      console.log(stayId);
      this.$emit('getStay',{stayId})
    },
    // goToStay(stay) {
    //   this.filterBy.country = stay;
    //   this.$store.dispatch({
    //     type: "setFilter",
    //     filterBy: JSON.parse(JSON.stringify(this.filterBy)),
    //   });
    //   this.$router.push(`/stay`);
    //   window.scrollTo(0, 0);
    // },
    setliked(stay) {
      this.$emit("stayLiked", stay)
    }
  },
};
</script>

