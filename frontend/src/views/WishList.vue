<template>
  <section class="main-layout">

    <h1>Wish list</h1>
    <stayList v-if="stays" :stays="stays" @stayLiked="setLiked" />


  </section>
</template>
  
<script>
import stayList from "../cmps/StayList.vue";
import appHeader from "../cmps/AppHeader.vue";
import { Share } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      likedStays: [],
      user: "",
      stays: [],
    };
  },
  async created() {
    this.user = this.$store.getters.user;
    this.stays = this.$store.getters.userLikedStays;
    // console.log(this.user);
    console.log('this.user.likedStays :>> ', this.user.likedStays);

    this.stays = this.user.likedStays
    console.log('this.stays2222222222 :>> ', this.stays);

  },
  methods: {
    setLiked(stay) {
      this.$store.dispatch({
        type: "setLikedStay",
        stay: JSON.parse(JSON.stringify(stay)),
      });
    },
  }, watch: {
    '$store.getters.userLikedStays'(newVal) {
      this.stays = newVal;
    },
  },
  computed: {},
  components: {
    stayList,
    appHeader,
  },
}
</script>
  
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>