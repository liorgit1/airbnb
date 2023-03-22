<template>
    <main class="home-page">
      <section class="main-hero main-layout3">
        <h1>Let your curiosity do the booking</h1>
        <button @click="flexibleClick" class="flexible">
          <h3>I'm flexible</h3>
        </button>
      </section>
  
      <home-list />
      <section class="host-container flex">
        <div class="container-title flex">
          <h2 class="host-title">
            <span>Questions about hosting?</span>
          </h2>
        </div>
  
        <button>
          <span class="host-btn-txt">Lets try</span>
        </button>
      </section>
      <login-modal
       v-close="closeLoginModal" 
        v-if="modalLoginIsOpen"
        @login="setLogin"
        @closeLoginModal="closeLoginModal"
      />
    </main>
  </template>
  
  <script>
  import appHeader from "../components/app-header.vue";
  import homeList from "../components/home-list.vue";
  import loginModal from "../components/login-modal.vue";
  import { userService } from "../services/user-service.js";
  
  export default {
    name: "home-page",
    data() {
      return {
        modalLoginIsOpen: false,
      };
    },
    methods: {
      flexibleClick() {
        this.$router.push("/stay/");
      },
    },
    computed: {
      stays() {
        this.$store.commit({ type: "setStay", stay });
      },
    },
    components: {
      appHeader,
    },
  };
  </script>