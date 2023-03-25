<template>
  <header >
    <nav class="flex">
      <RouterLink to="/" @click = "isOpen = false && resetParams()"  class="logo">
        <RouterLink to="/" class="logo" />  
        <img class="logo-img" src="../assets/pngs/logo1.png">
        <span class="logo-text">Earthbnb</span>
      </RouterLink>

      <div @click = "isOpen = true" v-bind:isOpen = "isOpen" v-if="!isOpen" class="search-bar">
        <button>anywhere</button>
        <span>|</span>
        <button>anyweek</button>
        <span>|</span>
        <button style="font-weight: normal">add guests</button>
        <button class="search-btn"> <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg></button>
      </div>

      
      
      <HeaderFilter  v-else>
      
      </HeaderFilter>

      <!-- <RouterLink to="/">become a host</RouterLink> -->
      <button class="user-nav">

        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; color: grey; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><g fill="none" fill-rule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
        <svg class="user-png" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 30px; width: 30px; fill: grey;"><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
      </button>
      
    </nav>
    <section class="loggedin-user" v-if="loggedInUser">
      <RouterLink :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </RouterLink>
      <span>{{ loggedInUser.score.toLocaleString() }}</span>
      <img :src="loggedInUser.imgUrl" />
    </section>
    <hr class="solid" v-if="!isOpen">
  </header>
   <!-- <hr class="boundry" v-if="!isOpen">  -->
  <!-- <modal v-if="isOpen" class="back-drop">
    <div style="background-color: white;">.</div>
  </modal> -->
</template>
<script>

import HeaderFilter from './HeaderFilter.vue'
import FilterList from './FilterList.vue'

export default {

  data() {
  return {
  isOpen: false
  }}
  ,
  components: {
   HeaderFilter,
   FilterList
  },

  computed: {

    resetParams(){
      this.$router.replace({'query': null});

    },
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },

}
</script>