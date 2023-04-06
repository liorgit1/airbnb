<template>
  <ul class="stay-list">
    <stay-preview
    @stayLiked="setLiked(stay)"
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
    // getStay(stayId){
    //   console.log(stayId);
    //   this.$emit('getStay',{stayId})
    // },
   
    setLiked(stay) {
      this.$emit("stayLiked", {stay})
      console.log('stay-list-stay',stay);
    }
  },
};
</script>

