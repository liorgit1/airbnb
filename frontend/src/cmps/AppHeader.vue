<template>
  <!-- v-bind:class="{'stay-details':isDetails}" -->

  <header>
    <section class=""
      :class="{ 'details-layout': isDetails, 'main-layout': !isDetails, 'mobile-layout': isMobileLayout }">
      <nav class="flex">
        <RouterLink to="/" @click="isOpen = false && resetParams()" class="logo">
          <RouterLink to="/" class="logo" />
          <img class="logo-img" src="../assets/pngs/logo1.png" />
          <span class="logo-text">earthbnb</span>
        </RouterLink>

        <div @click="isOpen = true" v-if="!isOpen" class="search-bar"
          :class="{ 'none': isUserTrips, 'on-mobile-layout': isMobileLayout }">
          <button style="padding-left: 10px;" v-if="!isDetails || !isMobileLayout">Anywhere</button>
          <button v-else style="padding-left: 10px;">Start your search</button>
          <span v-if="!isDetails || !isMobileLayout" style="opacity: 50%;">|</span>
          <span v-else></span>
          <button v-if="!isDetails || !isMobileLayout">Any week</button>
          <button v-else></button>
          <span v-if="!isDetails || !isMobileLayout" style="opacity: 50%">|</span>
          <span v-else></span>
          <button v-if="!isDetails || !isMobileLayout" style="font-weight: normal; opacity: 80%">
            Add guests
          </button>
          <button v-else></button>

          <button class="search-btn"> <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="presentation" focusable="false"
              style="display: inherit; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible; margin-left: 1px; margin-top: 0px !important;">
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                </path>
              </g>
            </svg>
          </button>
        </div>

        <!--  -->
        <div v-else>
          <HeaderFilter @close="isOpen = false"> </HeaderFilter>
        </div>

        <!-- <RouterLink to="/">become a host</RouterLink> -->
        <div class="flex" style="align-items: center;" :class="{ 'none': isMobileLayout }">
          <div>
            <RouterLink to="/Addstay">
              <h1
                style="margin-block-end: 0px; font-size:smaller; padding: 10px;border:0px solid;border-radius: 40px;color: black;font-weight: 500;">
                eartrbnb your home</h1>
            </RouterLink>
          </div>
          <label @click="this.modalUser = !this.modalUser" class="relative" @closeModalUser="closeModalUser">
            <button class="user-nav">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false"
                style="display: block;color: grey ; height: 16px; width: 16px;stroke: currentcolor;stroke-width: 3;overflow: visible">

                <g fill="none" fill-rule="nonzero">
                  <path d="m2 16h28"></path>
                  <path d="m2 24h28"></path>
                  <path d="m2 8h28"></path>
                </g>
              </svg>
              <svg class="user-png" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                role="presentation" focusable="false" style="display: block;  width: 25px; fill: grey; ">
                <path
                  d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
                </path>
              </svg>
            </button>
          </label>
          <userDetailsModal v-if="modalUser" @openSignUpModal="openSignUpModal" @openModalLogin="toggleModalLogin"
            @closeLoginModal="modalLoginIsOpen = false" @closeModalDetails="closeModalUser" />
        </div>
      </nav>
      <signUpModal v-if="modalSignUpIsOpen" @closeSignUpModal="modalSignUpIsOpen = false" @signup="setSignup">
      </signUpModal>
      <loginModal v-if="modalLoginIsOpen" @closeLoginModal="modalLoginIsOpen = false" @login="setLogin"
        @setLogin="modalLoginIsOpen = false" />

    </section>


  </header>

  <section class="mobile-footer">


    <label @click="this.modalUser = !this.modalUser" class="relative" @closeModalUser="closeModalUser">
      <button class="user-nav">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
          focusable="false"
          style="display: block;color: grey ; height: 16px; width: 16px;stroke: currentcolor;stroke-width: 3;overflow: visible">

          <g fill="none" fill-rule="nonzero">
            <path d="m2 16h28"></path>
            <path d="m2 24h28"></path>
            <path d="m2 8h28"></path>
          </g>
        </svg>
        <svg class="user-png" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
          role="presentation" focusable="false" style="display: block;  width: 25px; fill: grey; ">
          <path
            d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
          </path>
        </svg>
      </button>



    </label>
    <userDetailsModal v-if="modalUser" @openSignUpModal="openSignUpModal" @openModalLogin="toggleModalLogin"
      @closeLoginModal="modalLoginIsOpen = false" @closeModalDetails="closeModalUser" />

    <RouterLink to="/" @click="isOpen = false && resetParams()" class="logo">
      <RouterLink to="/" class="logo" @click="scrollToTop()" />
      <img class="logo-img" src="../assets/pngs/logo1.png" />
    </RouterLink>
    <!-- <ReservationBts -->
  </section>
</template>
<!-- modalSignUpIsOpen = false -->
<script>
import HeaderFilter from "./HeaderFilter.vue";
import FilterList from "./FilterList.vue";
import vClickOutsideUmd from "click-outside-vue3";
import loginModal from "./login-modal.vue";
import userDetailsModal from "./user-details-modal.vue";
import signUpModal from "./signUpModal.vue";
import ReservationBtn from "./ReservationBtn.vue";

export default {
  // name: "stay-header",
  data() {
    return {
      stickyNav: false,
      openfilter: true,
      filter: null,
      modalUser: false,
      isDetails: false,
      isOpen: false,
      modalLoginIsOpen: false,
      modalSignUpIsOpen: false,
      isUserTrips: false,
      isMobileLayout: false,
    };
  }
  ,


  created() {
    window.addEventListener("scroll", this.handleScroll);

    window.addEventListener("resize", this.handleScreenChange);

  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },



  methods: {
    toggleModalLogin() {
      this.modalUser = false;
      this.modalLoginIsOpen = !this.modalLoginIsOpen;
    },

    closeLoginModal() {
      this.modalUser = false;
      this.modalLoginIsOpen = false;
    },

    closeSignUpModal() {
      this.modalUser = false;
      this.modalSignUpIsOpen = false;
    },

    openSignUpModal() {
      this.modalUser = false
      this.modalSignUpIsOpen = !this.modalSignUpIsOpen
    },
    setLogin(user) {
      console.log('user', user)
      this.$store.dispatch({
        type: "login",

        userCred: user,
      });
      this.modalLoginIsOpen = false;
    },
    setSignup(user) {
      console.log('user', user)
      this.$store.dispatch({
        type: "signup",

        userCred: user,
      });
      this.modalSingUpIsOpen = false;
    },
    openModalUser() {
      this.modalUser = true;
    },
    closeModalUser() {
      this.modalUser = false;
    },
    toggleModalUser() {
      this.modalUser = !this.modalUser;
      console.log("!this.modalUser; :>> ", !this.modalUser);
    },

    handleRoute() {
      console.log('thisRoute', this.thisRoute);

      if (this.thisRoute == 'stayIndex') {
        this.isDetails = false
        this.isUserTrips = false
      }
      if (this.thisRoute == 'stay-details') {
        this.isDetails = true
        this.isUserTrips = false
      }
      if (this.thisRoute == 'user-trip') {
        console.log('you are in user trips', this.thisRoute)
        this.isDetails = false
        this.isUserTrips = true
      }
    },

    handleScroll() {
      this.isOpen = false;
    },

    toggle() {
      if (this.opened) {
        return this.hide();
      }
      return this.show();
    },
    show() {
      this.opened = true;
      setTimeout(() => document.addEventListener("click", this.hide), 0);
    },
    hide() {
      this.opened = false;
      document.removeEventListener("click", this.hide);
    },

    handleScreenChange() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        this.isMobileLayout = true;
        this.is
      }
      else this.isMobileLayout = false
    },

    scrollToTop() {

      this.$refs.main.scrollTo(0, 0)

    },
  },



  computed: {
    thisRoute() {
      return this.$route.name;
    },

    resetParams() {
      this.$router.replace({ query: null });

    },
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },

  watch: {
    "$route.name": {
      handler() {
        this.handleRoute();
      },
      deep: true,
      immediate: true,
    },
  },

  components: {
    ReservationBtn,
    HeaderFilter,
    FilterList,
    userDetailsModal,
    //  vClickOutsideUmd,
    loginModal,
    signUpModal,
  },
};
</script>









