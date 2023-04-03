<template>
  <div v-click-outside="onClickedOutside" ref="container" class="container">
    <div class="bar">
      <div class="location bar-div" :class="{ 'clicked': showLocationsModal }"
        @click="showLocationsModal = true, showGuestsModal = false, showDatesModal = false, checkInClicked = false, checkOutClicked = false">
        <p>Location</p>

        <input type="text" v-model="searchBy.country" placeholder="Where are you going?" @keyup.enter="setSearch()" />
      </div>

      <LocationsModal @passData="getData($event)" @close="showLocationsModal = false" v-if="showLocationsModal" />

      <div class="check-in bar-div" :class="{ 'clicked': checkInClicked }"
        @click="showLocationsModal = false, showGuestsModal = false, showDatesModal = true, checkInClicked = true, checkOutClicked = false">
        <p>Check in</p>
        <input type="text" v-model="getDates.start" placeholder="Add dates" @keyup.enter="setSearch()" />
      </div>

      <DatePickerModal @passDateData="getDateData($event)" @close="showDatesModal = false" v-if="showDatesModal" />

      <div class="check-out bar-div" :class="{ 'clicked': checkOutClicked }"
        @click="showLocationsModal = false, showGuestsModal = false, showDatesModal = true, checkInClicked = false, checkOutClicked = true">
        <p>Check out</p>
        <input type="text" v-model="getDates.end" placeholder="Add dates" @keyup.enter="setSearch()" />
      </div>

      <div class="guests bar-div" :class="{ 'clicked': showGuestsModal }"
        @click="showDatesModal = false, showLocationsModal = false, showGuestsModal = true, checkInClicked = false, checkOutClicked = false">
        <div>
          <p>Guests</p>
          <input type="text" v-model="guestsDisplay" placeholder="Add guests" />
          <!-- v-model="searchBy.guests" -->
        </div>
        <span @click="setSearch(), $emit('close')"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" role="presentation" focusable="false"
            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible; margin-left: 1px;">
            <g fill="none">
              <path
                d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
              </path>
            </g>
          </svg>Search</span>
      </div>

      <GuestsModal v-if="showGuestsModal" @setChildrenCount="setChildrenCount($event)"
        @setAdultCount="setAdultCount1($event)" @setInfantsCount="setInfantsCount($event)"
        @setPetsCount="setPetsCount($event)"
        style="top:153px ; right:5px; font-size:initial ; border-radius: 32px ; box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.0392156863), 0 8px 16px rgba(0, 0, 0, 0.1490196078);" />

    </div>
  </div>
  <!-- class="lni lni-search-alt" -->
</template>

<script>
import { onMounted } from 'vue'
import { stayService } from '../services/stay-service.js'
// import { stayService } from '../services/stay.service.local.js'
import LocationsModal from './LocationsModal.vue'
import vClickOutside from 'click-outside-vue3'
import DatePickerModal from './DatePickerModal.vue'
import GuestsModal from '../cmps/GuestsModal.vue'

export default {

  components: { LocationsModal, DatePickerModal, GuestsModal, vClickOutside },

  name: 'DestSearch',

  data() {
    return {
      searchBy: { country: '' },

      getDates: { start: '', end: '' },

      guests: {
        adults: 0,
        kids: 0,
        infants: 0,
        pets: 0
      },

      clickedDest: { country: '' },

      showLocationsModal: true,

      showDatesModal: false,

      showGuestsModal: false,

      checkInClicked: false,

      checkOutClicked: false,

      mounted() {

        this.searchBy.country = data.country

      },
    }
  },

  directives: {
    clickOutside: vClickOutside.directive
  },

  methods: {

    setSearch() {
      this.$router.push({
        name: 'exploreApp', query: {
          country: this.searchBy.country, startDate: this.getDates.start, endDate: this.getDates.end,
          adults: this.guests.adults, kids: this.guests.kids, infants: this.guests.infants, pets: this.guests.pets
        }
      })

      this.$emit('closeModal', false)

    },

    getData(data) {
      // this.clickedDest = data
      this.searchBy.country = data.country
      console.log(this.searchBy)
    },

    getDateData(data) {
      this.getDates.start = data.start
      this.getDates.end = data.end
      console.log(this.getDates.start, this.getDates.end)
    },

    onClickedOutside(event) {
      console.log('clicked outside')
      this.$emit('close')
      console.log(event)
    },

    setAdultCount1({ adultCount }) {
      this.guests.adults = adultCount
      console.log('this.guests.adult2111 :>> ', this.guests.adults);
    },
    setChildrenCount({ childrenCount }) {
      this.guests.kids = childrenCount
      console.log('this.guests.kids :>> ', this.guests.kids);
    },
    setInfantsCount({ infantsCount }) {
      this.guests.infants = infantsCount
      console.log('this.guests.infants :>> ', this.guests.infants);
    },
    setPetsCount({ petsCount }) {
      this.guests.pets = petsCount
      console.log('this.guests.pets :>> ', this.guests.pets);
    },
    onClickedOutside() {
      this.openDatesModal = false,
      this.$emit('close')
    }

  },

  computed: {
    guestsDisplay() {
      let adults
      let kids
      let guests
      let infants
      let totalGuests
      let pets
      adults = this.guests.adults
      kids = this.guests.kids
      guests = adults + kids > 0 ? `${adults + kids} guests` : 'Add guests'
      infants = this.guests.infants > 0 ? `${this.guests.infants} infants` : ' '
      pets = this.guests.pets > 0 ? `${this.guests.pets} pets` : ' '
      totalGuests = `${guests} ${infants} ${pets}`
      console.log('totalGuests :>> ', totalGuests);
      return totalGuests
    }
  }


}
</script>


