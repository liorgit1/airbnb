<template>
  <!-- v-bind:class="{'stay-details':isDetails}" -->

  <header>
    <section class="" :class="{ 'details-layout': isDetails, 'main-layout': !isDetails }">
      <nav class="flex">

        <RouterLink to="/" @click="isOpen = false && resetParams()" class="logo">

          <RouterLink to="/" class="logo" />
          <img class="logo-img" src="../assets/pngs/logo1.png">
          <span class="logo-text">earthbnb</span>
        </RouterLink>

        <div @click="isOpen = true" v-if="!isOpen" class="search-bar">

          <button v-if="!isDetails">Anywhere</button>
        <!-- <button v-if="isExplore">{{this.country}}</button> -->
          <button v-else>start your search</button>

          <span v-if="!isDetails" style="opacity: 50%;">|</span>
          <span v-else></span>

          <button v-if="!isDetails">Any week</button>
        <!-- <button v-if="isExplore">{{this.getDates.start}},{{ this.getDates.end }}</button> -->
          <button v-else="isDetails"></button>

          <span v-if="!isDetails" style="opacity: 50%;">|</span>
          <span v-else></span>

          <button v-if="!isDetails" style="font-weight: normal ; opacity: 80%;">Add guests</button>
          <button v-else></button>
          <button class="search-btn"> <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="presentation" focusable="false"
              style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible; margin-left: 1px;">
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                </path>
              </g>
            </svg></button>
        </div>

      <!--  -->
      <div  v-else  >
      <HeaderFilter @close ="isOpen = false" >
      
      </HeaderFilter>
      </div>

        <RouterLink to="/">become a host</RouterLink>




        <label
          @click="toggleModalUser"
          class="relative"
          v-close="closeModalUser"
        >
          <button class="user-nav">

            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
              focusable="false"
              style="display: block; color: grey; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
              <g fill="none" fill-rule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </svg>
            <svg class="user-png" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              role="presentation" focusable="false" style="display: block;  width: 25px; fill: grey;">
              <path
                d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z">
              </path>
            </svg>
          </button>
        </label>
        <user-details-modal
          v-close="closeModalUser"
          v-if="modalUser"
          @openModalLogin="openModalLogin"
          @closeLoginModal="closeLoginModal"
          @closeModalDetails="closeModalUser"
        />
      </nav>
      <!-- <loginModal v-if="modalLoginIsOpen" @closeLoginModal="toggle" /> -->
    </section>
  </header>
</template>

<script>


import HeaderFilter from './HeaderFilter.vue'
import FilterList from './FilterList.vue'
import vClickOutsideUmd from 'click-outside-vue3'
import loginModal from './login-modal.vue'
import userDetailsModal from './user-details-modal.vue';

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
      // modalLoginIsOpen: false
    };
  }
  ,


  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    showNotification() {
      this.isApprove = true;
    },
    handleScroll(event) {
      if (window.top.scrollY > 20) {
        this.stickyNav = true;
        this.openfilter = false;
      } else {
        this.stickyNav = false;
        this.openfilter = true;
      }
    },
    toggle() {
      this.openfilter = !this.openfilter;
      this.mobileFilter = !this.mobileFilter;
    },
    setMiniFilter(filterBy) {
      this.filter = filterBy;
    },
    openModalUser() {
      this.modalUser = true;
    },
    closeModalUser() {
      this.modalUser = false;
    },
    toggleModalUser() {
      this.modalUser = !this.modalUser;
    },
    openModalLogin() {
      this.modalUser = false;
      this.$emit("openModalLogin");
    },
    setFilter() {
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filter)),
      });
      this.mobileFilter = false;
      this.$router.push(`/stay`);
    },
    thisRoute() {
      return this.$route.name
    },

    resetParams() {
      this.$router.replace({ 'query': null });

    },
  },

    
  // watch: {
  //   '$route.name': {
  //     handler() {
  //       this.handleRoute();
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },

  methods:{

    handleRoute(){
      console.log('thisRoute',this.thisRoute);

      if(this.thisRoute == 'stayIndex')
      this.isDetails = false
      if (this.thisRoute == 'stay-details')
      this.isDetails = true
    },

    handleScroll () {
      this.isOpen = false
    },
   

  },
  computed: {
      getLogo() {
        return this.stickyNav
          ? "https://a0.muscache.com/im/pictures/user/613cd4c0-cf5f-407e-9f13-ec7cbcc592d6.jpg?im_w=240"
          : "https://a0.muscache.com/im/pictures/user/bc2a266c-3ed1-4e9f-886f-9c47b2fd95b4.jpg?im_w=240";
      },
      getFilter() {
        return this.filter.country ? `${this.filter.country}` : "Start to search";
      },
    },
    unmounted() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };




</script>