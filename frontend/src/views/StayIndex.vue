<template>
  <!-- class="main-layout" -->
  <section >
    <FilterList />
  <main class="home-page main-layout">
    <stay-list
    @getStay="getStay"  
    :stays="stays" 
    />
  </main>
  <login-modal
     v-close="closeLoginModal" 
      v-if="modalLoginIsOpen"
      @login="setLogin"
      @closeLoginModal="closeLoginModal"
    />
</section>

</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import stayList from "../cmps/StayList.vue";
import FilterList from "../cmps/FilterList.vue";
import loginModal from "../cmps/login-modal.vue";



export default {
  name: "StayIndex",
  created() {
    this.$store.dispatch({ type: 'loadStays' })
  },
  methods: {
    getStay({stayId}){
      this.$router.push( '/stay/' + stayId)
    },
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
    }
  },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
  },
  components: {
    appHeader,
    FilterList,
    stayList,
    loginModal
    
},
};
</script>
