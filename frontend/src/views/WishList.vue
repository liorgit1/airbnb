<template>
    <section class="detailsImgContainer">
      <h1>Wish list</h1>
  
      
     
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
      console.log(this.user);
      this.stays = await this.$store.dispatch({
        type: "loadStaysLikedUser",
        likedStays: this.user.likedStays,
      });
    },
    methods: {
      setLiked(stay) {
        this.$store.dispatch({
          type: "setLikedStay",
          stayId: JSON.parse(JSON.stringify(stay)),
        });
      },
    },
  
    computed: {},
    components: {
      stayList,
      appHeader,
    },
  };
  </script>
  
  <style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
  </style>