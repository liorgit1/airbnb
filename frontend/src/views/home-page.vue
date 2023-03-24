<template>
  <main class="home-page">
    <FilterList />
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
    <!-- <login-modal
     v-close="closeLoginModal" 
      v-if="modalLoginIsOpen"
      @login="setLogin"
      @closeLoginModal="closeLoginModal"
    /> -->
  </main>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import homeList from "../cmps/home-list.vue";
import FilterList from "../cmps/FilterList.vue";

// import { userService } from "../services/user-service.js";

export default {
  name: "home-page",
  data() {
    return {
      modalLoginIsOpen: false,
    };
  },
  methods: {
    openModalLogin() {
      this.modalLoginIsOpen = true;
    },
    closeLoginModal() {
      this.modalLoginIsOpen = false;
    },
    setLogin(user) {
      this.$store.dispatch({
        type: "login",
        userCred: user,
      });
      this.modalLoginIsOpen = false;
    },
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
    FilterList,
    homeList,
    
},
};
</script>
