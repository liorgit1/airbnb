<template>
  <div ref="container" @focusout="handleOutFoucs()" class="container">
    <div class="bar">
    <div class="location">
      <p>Location</p>
      <input type="text" v-model="searchBy.country" placeholder="Where are you going?" @keyup.enter="setSearch()" />
    </div>
    <div class="check-in">
      <p>Check in</p>
      <input type="text" placeholder="Add dates" />
    </div>
    <div class="check-out">
      <p>Check out</p>
      <input type="text" placeholder="Add dates" />
    </div>
    <div class="guests">
      <p>Guests</p>
      <input type="text" v-model="searchBy.guests" placeholder="Add guests" />
      <span @click="setSearch()"><i class="lni lni-search-alt"></i></span>
    </div>
</div>
  </div>
</template>

<script>
import { stayService } from '../services/stay.service.local.js'

export default {
  name: 'DestSearch',
  data() {
    return {
      searchBy: { country: '',guests:'' }
    }
  },

  mounted:{

    handleOutFoucs(){
    
  }
  },

  methods: {
    setSearch() {
      this.$router.push({ name: 'exploreApp', query: { country: this.searchBy.country, guests: this.searchBy.guests } })

      this.$emit('closeModal' , false)
    },

    

  }
}
</script>


