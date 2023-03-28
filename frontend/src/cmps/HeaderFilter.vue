<template>
  <div ref="container"  class="container">
    <div class="bar">
    <div class="location bar-div">
      <p>Location</p>
      
    <input type="text" v-model="searchBy.country" placeholder="Where are you going?" @keyup.enter="setSearch()" /> 
    </div>
    <LocationsModal @passData="getData($event)" @close="showModal = false" v-if="showModal"/>
    <div class="check-in bar-div">
      <p>Check in</p>
      <input type="text" placeholder="Add dates" @keyup.enter="setSearch()"/>
    </div>
    <div class="check-out bar-div">
      <p>Check out</p>
      <input type="text" placeholder="Add dates" @keyup.enter="setSearch()"/>
    </div>
    <div class="guests bar-div">
    <div>
      <p>Guests</p>
      <input type="text" v-model="searchBy.guests" placeholder="Add guests" />
    </div>
      <span @click="setSearch() "><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible; margin-left: 1px;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>search</span>
    </div>
    
    </div>
  </div>
  <!-- class="lni lni-search-alt" -->
</template>

<script>
import { onMounted } from 'vue'
import { stayService } from '../services/stay.service.local.js'
import LocationsModal from './LocationsModal.vue'
export default {

components:{LocationsModal},

  name: 'DestSearch',

  data() {
    return {
      searchBy: { country: '' },

      clickedDest:{country:''},
    
      showModal : true,

    mounted(){

        this.searchBy.country = data.country

    },
  }
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
     }

  }

  
}
</script>


