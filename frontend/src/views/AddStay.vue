<template>
  <section class="main-layout">
    <form class="stay-edit__form grid" @submit.prevent="saveStay">
      <div class="stay-edit__input-box">
        <label for="txt" class="stay-edit__label">stay Name</label>
        <input v-model="newStay.name" id="txt" type="text" placeholder="Enter your stay name here..." />
      </div>

      <div class="stay-edit__input-box">
        <label class="stay-edit__label" for="price">Price</label>
        <input required v-model.number="newStay.price" id="price" type="number" />
      </div>

      <!-- <el-switch
          v-model="stayToEdit.inStock"
          size="large"
          active-text="In Stock"
          inactive-text="Out of stock"
        /> -->

      <div>Select the capacity: {{ selected }}</div>

      <select v-model="newStay.capacity">
        <option disabled value="">Please select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>

      <div>
        <label for="summary">enter a brief summary:</label>
        <textarea v-model="newStay.summary"></textarea>
      </div>

      <div>
        <label for="country">enter your stay location country:</label>
        <input v-model="newStay.loc.country" id="country" type="text" />
      </div>
      <!-- <el-select v-model="selectedLabels" multiple placeholder="Pick number of beds">
          <el-option
            v-for="label in labels"
            :key="label.title"
            :label="label.title"
            :value="label.title"
            :style="{ backgroundColor: label.color, color: '#ffffff' }"
          />
        </el-select> -->

      <div>
        <button class="btn">save</button>
        <button class="btn-dark" @click="goBack">go back</button>
      </div>
    </form>
  </section>
</template>
  
<script>
import { stayService } from '../services/stay-service'

export default {
  name: 'stay-edit',
  data() {
    return {
      newStay: {
        name: '',
        price: '',
        summary: '',
        capacity: '',
        loc: { country: '' },
        reviews: [],
        host: {},


      },
      // selectedLabels: [],
    }
  },
  created() {
    console.log('this.user :>> ', this.user);
    console.log('this.newStay.host :>> ', this.newStay.host);
    this.newStay.host._id = this.user._id

    // if (!this.user) this.$router.push('/stay')

    // const { stayId } = this.$route.params
    // if (stayId) {
    //   stayService.getById(stayId).then(stay => {
    //     this.stayToEdit = stay
    //     this.selectedLabels = stay.labels.map(label => label.title)
    //   })
    // } else this.stayToEdit = stayService.getEmptystay()
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    saveStay() {
      // const newLabels = this.labels.filter(label => this.selectedLabels.includes(label.title))
      // this.stayToEdit.labels = newLabels
      console.log(this.newStay)
      console.log(this.newStay.loc.country)
      this.$store.dispatch({ type: 'saveStay', stay: this.newStay })
      // .then(() => {
      //   this.$router.push('/') })
    },
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    //   labels() {
    //     return this.$store.getters.labels
    //   },
  },
}
</script>
  