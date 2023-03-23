<template>
    <main class="home-page">
      <section class="main-hero main-layout3">
        <h1>Let your curiosity do the booking</h1>
        <button @click="flexibleClick" class="flexible">
          <h3>I'm flexible</h3>
        </button>
      </section>
  
      <StayList />
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
      />
    </main>
  </template>
  
  <script>
  import appHeader from "../cmps/AppHeader.vue";
  import stayList from "../cmps/stay-list.vue";
  
  
  export default {
    name: "StayIndex",
   
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