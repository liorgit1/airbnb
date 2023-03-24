<template>
  <section class="main-layout2">
    <h1>{{ title }}</h1>
    <stay-list
      :stays="stays"
      v-if="stays"
      @stayLiked="setLiked"
    >
    </stay-list>
    <div v-if="!stays?.length">
      <img class="loading-img" src="../assets/loader.gif" />
    </div>
  </section>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import stayList from "../cmps/StayList.vue";
import typePlaceModal from "../cmps/type-place-modal.vue";
// import { userService } from "../services/user.service.js";

export default {
  created() {},
  data() {
    return {
      filterBy: {
        price: {
          minPrice: 30,
          maxPrice: 2000,
        },
        type: [],
        amenities: [],
      },
      modalPrice: false,
      modalType: false,
      modalLoginIsOpen: false,
    };
  },
  computed: {
    staysToDisplay() {
			if (!this.filterBy?.title) return this.stays
			return this.stays.filter((stay) => stay.title.includes(this.filterBy.title))
		},
    stays() {
      return this.$store.getters.stays;
    },
    title() {
      const filter = this.$store.getters.filterBy;
      const count = this.$store.getters.stays;
      if (!filter || !count) return;
      return filter.country
        ? `${count.length} stays in ${filter.country}`
        : "explore stays";
    },
  },
  methods: {
  },
  components: {
    appHeader,
    stayList,
    typePlaceModal,
  },
};
</script>

<style></style>
