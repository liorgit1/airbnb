<template>
  <div v-click-outside="onClickedOutside" ref="container"  class="container">
    <div class="bar">
    <div class="location bar-div" @click="showLocationsModal = true , showDatesModal = false">
      <p>Location</p>
      
    <input type="text" v-model="searchBy.country" placeholder="Where are you going?" @keyup.enter="setSearch()" /> 
    </div>
    <LocationsModal @passData="getData($event)" @close="showLocationsModal = false" v-if="showLocationsModal"/>

    <div class="check-in bar-div" @click="showLocationsModal = false , showDatesModal = true">
      <p>Check in</p>
      <input type="text" v-model="getDates.start" placeholder="Add dates" @keyup.enter="setSearch()"/>
    </div>

    <DatePickerModal @passDateData="getDateData($event)" @close = "showDatesModal = false" v-if="showDatesModal"/>

    <div class="check-out bar-div" @click="showLocationsModal = false , showDatesModal = true">
      <p>Check out</p>
      <input type="text" v-model="getDates.end" placeholder="Add dates" @keyup.enter="setSearch()"/>
    </div>
    <div class="guests bar-div">
    <div>
      <p>Guests</p>
      <input type="text" v-model="searchBy.guests" placeholder="Add guests" />
    </div>
      <span @click="setSearch() , $emit('close')"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible; margin-left: 1px;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>search</span>
    </div>
    
    </div>
  </div>
  <!-- class="lni lni-search-alt" -->
</template>

<script>
import { onMounted } from 'vue'
import { stayService } from '../services/stay.service.local.js'
import LocationsModal from './LocationsModal.vue'
import vClickOutside from 'click-outside-vue3'
import DatePickerModal from './DatePickerModal.vue'
export default {

components:{LocationsModal , DatePickerModal},

  name: 'DestSearch',

  data() {
    return {
      searchBy: { country: '' },
      
      getDates:{start:'' , end:''},

      clickedDest:{country:''},
    
      showLocationsModal : true,

      showDatesModal:true,

    mounted(){

        this.searchBy.country = data.country

    },
  }
  },
  
  directives: {
      clickOutside: vClickOutside.directive
    },

  methods: {

     setSearch() {
     this.$router.push({ name: 'exploreApp', query: { country: this.searchBy.country} })

     this.$emit('closeModal' , false)
    
     },

     getData(data){
        // this.clickedDest = data
        this.searchBy.country = data.country
        console.log(this.searchBy)
     },

     getDateData(data){
        this.getDates.start = data.start
        this.getDates.end = data.end
        console.log(this.getDates.start , this.getDates.end)
     },

     onClickedOutside(event){
        console.log('clicked outside')
        this.$emit('close')
        console.log(event)
     }

  }

  
}
</script>


