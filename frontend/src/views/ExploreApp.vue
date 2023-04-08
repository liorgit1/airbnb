<template>
  <section class="upper-section-header-explore main-header fix">
    <!-- <app-header @openModalLogin="openModalLogin" /> -->
  </section>
  <section class="main-layout">
    <h4 v-if="stays">over {{ stays.length - 1 }} homes</h4>
    <stay-list
      :stays="stays"
      v-if="stays"
      @stayLiked="setLiked"
    >
    </stay-list>
  </section>
</template>

<script>
import appHeader from '../cmps/AppHeader.vue'
import headerFilter from '../cmps/HeaderFilter.vue'
import stayList from '../cmps/StayList.vue'
import loginModal from '../cmps/login-modal.vue'
// import typePlaceModal from '../cmps/type-place-modal.vue'
import { stayService } from '../services/stay-service'
// import { stayService } from '../services/stay.service.local'

export default {
  name: 'explore',
  data() {
    return {
      stays: [],
      filterBy: { country: '' },
      country: null,
      startDate: null,
      endDate: null,
      adults: null,
      kids: null,
      infants: null,
      pets: null,
    }
  },
  async created() {
    const { country,startDate,endDate,adults,kids,infants,pets } = this.$route.query
    if (country) this.filterBy.country = country
    this.stays = await stayService.query(this.filterBy)
    this.startDate =startDate
    this.endDate = endDate
    this.adults = adults
    this.kids = kids
    this.infants = infants,
    this.pets = pets
  },
  
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
      // const filteredByGuests = filteredByCountry.filter((stay) => {
      //   return (
      //     stay.capacity >= Number(this.filterBy.guests) || !this.filterBy.guests
      //   )
      // })
      // return filteredByGuests
      title() {
        if (this.filterBy.country) {
          return `Stays in ${this.filterBy.country}`
        }
        return 'Explore Stays'
      }
    },
    methods: {
    // openModalLogin() {
    //   this.modalLoginIsOpen = true;
    // },
    // closeLoginModal() {
    //   this.modalLoginIsOpen = false;
    // },
    async setLogin(user) {
      try {
        await this.$store.dispatch({
          type: "login",
          userCred: user,
        });
      } catch (err) {
        console.log(err);
        this.msg = "Failed to login";
      }
      this.modalLoginIsOpen = false;
    },
    // ChangeModalPrice() {
    //   this.modalPrice = !this.modalPrice;
    // },
    // ChangeModalType() {
    //   this.modalType = !this.modalType;
    // },
    setSort(sortBy) {
      this.filterBy.type = sortBy;
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
      this.modalType = false;
    },
    setSortAmenities(amenity) {
      if (this.filterBy.amenities.includes(amenity)) return;

      this.filterBy.amenities.push(amenity);
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
    },
    setFilterByPrice(filterByPrice) {
      this.filterBy.price.minPrice = filterByPrice.minPrice;
      this.filterBy.price.maxPrice = filterByPrice.maxPrice;
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
      this.modalPrice = false;
    },
    setLiked(stay) {
      this.$store.dispatch({
        type: "setLikedStay",
        stay: JSON.parse(JSON.stringify(stay)),
      });
    },
  },
  components: {
    stayList,
    loginModal,
  },
};
</script>


