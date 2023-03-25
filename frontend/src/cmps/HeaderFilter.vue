<template>
    <!-- <form class="bar"> -->
  <div class="container">
    
  <div class="bar">
  <div class="location">
    <p>Location</p>
    <input type="text" v-model="destination" placeholder="Where are you going?">
  </div>
  <div class="check-in">
        <p>Check in</p>
    <input type="text" placeholder="Add dates">
  </div>
  <div class="check-out">
        <p>Check out</p>
    <input type="text" placeholder="Add dates">
  </div>
  <div class="guests">
        <p>Guests</p>
    <input type="text" v-model="guestsNum" placeholder="Add guests">
    <span @click="setSearch()"><i class="lni lni-search-alt"></i></span>
  </div>
</div>

</div>
</template>

<script>
export default {
    name:'dest-search',
  data() {
  return {
    searchBy:{destination:'' , guestsNum: 0 , date: 10/10/2022},
  }
},

watch: {

    searchBy:{
        handler(){
            this.$emit('search',this.searchBy)
        }
    }

},
methods: {
    setSearch() {
      this.$emit('filteredDest', this.destination)
    
      this.$emit('guests', this.guestsNum)

      this.$emit('dates', this.date)

    //   this.$router.push({ location: 'this.destination', guestsNum:'this.guestsNum'  })

    //   this.$router.push(`/explore/destination=${this.destination}/guestsNum=${this.guestsNum}`)

       this.$router.push({ path: "/explore", query: { destination: this.destination, guests: this.guestsNum} } )

      console.log( this.destination, this.guestsNum)
    }
},
    
computed: {
    
}

}


</script>


