<template>
  <section class="main-layout">
    <h4 v-if="stays">over {{ stays.length - 1 }} homes</h4>
    <stay-list
     @getStay="getStay" 
     :stays="stays" v-if="stays">
    </stay-list>
  </section>
</template>

<script>
import appHeader from '../cmps/AppHeader.vue'
import headerFilter from '../cmps/HeaderFilter.vue'
import stayList from '../cmps/StayList.vue'
import typePlaceModal from '../cmps/type-place-modal.vue'
import { stayService } from '../services/stay-service'

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

    methods: {
    getStay({stayId}){
      this.$router.push(`/stay/${stayId}?startDate=${this.startDate}&endDate=${this.endDate}&adults=${this.adults}&kids=${this.kids}&infants=${this.infants}&pets=${this.pets}`)
    //   this.$router.push( '/stay/' + stayId ,{  query: { country: this.country , startDate:this.getDates.start , endDate:this.getDates.end,
    // adults:this.guests.adults , kids:this.guests.kids , infants:this.guests.infants , pets:this.guests.pets } })
    },
  },

  computed: {
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
} 
</script>


