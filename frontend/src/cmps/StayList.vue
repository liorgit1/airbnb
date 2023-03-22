<template>
    <ul class="stay-list">
      <stay-preview
        @stayLiked="setLiked"
        v-for="stay in stays"
        :stay="stay"
        :key="stay._id"
      >
      </stay-preview>
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
      setLiked(stay) {
        this.$emit("stayLiked", stay);
      },
    },
  };
  </script>
  
  <style></style>
  