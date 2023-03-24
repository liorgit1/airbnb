<template>
    <form class="container">

    <div class="search-form">
    <div class="dest-field">  
    <h2>where?</h2>
    <!-- <h1>choose destinations</h1>  -->
    <input v-model="destination" type="text" id="fname" name="fname" class="dest-search" placeholder="choose destinations">
    </div>

    <div>  
    <h2>check in</h2>
    <h1>add dates</h1> 
    </div>

    <div>  
    <h2>check out</h2>
    <h1>add dates</h1> 
    </div>

    <div>  
    <h2>who</h2>
    <input  class="dest-search" v-model.number = "guestsNum" placeholder="number of guests"> 
    </div>
    
    <div>
    <button @click="setSearch()" class="search-btn" ><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>search</button>
    </div>
</div>
</form>


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


