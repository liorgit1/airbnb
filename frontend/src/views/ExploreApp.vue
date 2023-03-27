<template>
  <section class="main-layout">
    <h4>over {{ filteredStays.length - 1 }} homes</h4>
    <stay-list :stays="filteredStays" v-if="filteredStays.length > 0"></stay-list>
  </section>
</template>

<script>
import appHeader from '../cmps/AppHeader.vue'
import headerFilter from '../cmps/HeaderFilter.vue'
import stayList from '../cmps/StayList.vue'
import typePlaceModal from '../cmps/type-place-modal.vue'
import { stayService } from '../services/stay.service.local'

export default {
  name: 'explore',
  components: {
    appHeader,
    stayList,
    typePlaceModal,
    headerFilter
  },
  data() {
    return {
      stays: [],
      filterBy: { country: '' }
    }
  },
  async created() {
    const { country } = this.$route.query
    if (country) this.filterBy.country = country
    // if (guests) this.filterBy.guests = guests
    this.stays = await stayService.query()
  },
  computed: {
    filteredStays() {
      const filteredByCountry = this.stays.filter((stay) => {
        return (
          stay.loc.country.toLowerCase().includes(this.filterBy.country.toLowerCase())
        )
      })
      const filteredByGuests = filteredByCountry.filter((stay) => {
        return (
          stay.capacity >= Number(this.filterBy.guests) || !this.filterBy.guests
        )
      })
      return filteredByGuests
    },
    title() {
      if (this.filterBy.country) {
        return `Stays in ${this.filterBy.country}`
      }
      return 'Explore Stays'
    }
  }
}
</script>


<style>
</style>
