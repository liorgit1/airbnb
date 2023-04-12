<template>
  <section class="main-layout">
    <form  @submit.prevent="saveStay">
      
      <section>
      <div class="stay-edit__input-box">
        Stay Name:
        <label for="txt" class="stay-edit__label"></label>
        <input v-model="newStay.name" id="txt" type="text" placeholder="Enter your stay name here..." />
      </div>

      <div>
        Enter your stay location country:
        <label for="country"></label>
        <input v-model="newStay.loc.country" id="country" type="text" placeholder="enter the country here..."/>
      </div>
      </section>

      
      <div class="img-container">
      <label v-for = "imgUrl in imgUrlss" :key = imgUrl.id class="image-input" @drop.prevent="handleFile($event , imgUrl.id)" @dragover.prevent>
        <span
        v-if="!imgUrl.imgUrl"
        class="placeholder">
        Drag an Image
        </span>
        <img v-else class="placeholder" :src= imgUrl.imgUrl alt="">
        <input type="file" @change="handleFile($event , imgUrl.id)" hidden>
      </label>
      </div>

      <div class="stay-edit__input-box">
        Enter the price per night:
        <label class="stay-edit__label" for="price"></label>
        <input v-model.number="newStay.price" id="price" type="number" />
      </div>


      <div>Select the capacity: {{ selected }}
      <select v-model.number = "newStay.capacity">
        <option disabled value="">Please select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
    </div>

      <div>
        Enter a brief summary:
        <label for="summary"></label>
        <textarea v-model="newStay.summary"></textarea>
      </div>

      <section class="grid"> 
      Select your amenities:
      <div v-for = "amenitiy in nAmenities" key:amenitiy.id>
        <input type="checkbox" for=""  @click="push(amenitiy.id)">
        <label> {{ amenitiy.amenitiy }} </label>
      </div>
     </section>

      <div>
        <button class="btn">save</button>
        <button class="btn-dark" @click="goBack">go back</button>
      </div>
    </form>
  </section>
</template>
  
<script>

import { stayService } from '../services/stay-service'
import PictureInput from 'vue-picture-input'
import {uploadImg} from '../services/uploadService'
import { keys } from 'lodash'

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
        imgUrls:[],
        host: {},
        amenities:[],
        likedByUsers:[]
      },

      imgUrlss:[{id:0 , imgUrl:null},
                   {id:1 , imgUrl:null},
                   {id:2 , imgUrl:null},
                   {id:3, imgUrl:null},
                   {id:4, imgUrl:null}],

                   nAmenities:[{id:0 , amenitiy:'Wifi'},
                   {id:1 , amenitiy:'Pets allowed'},
                   {id:2 , amenitiy:'Kitchen'},
                   {id:3 , amenitiy:'Dryer'},
                   {id:4 , amenitiy:'Heating'},
                   {id:5 , amenitiy:'Essentials'},
                   {id:6 , amenitiy:'Air conditioning'},
                   {id:7 , amenitiy:'Pool'},
                   {id:8 , amenitiy:'Gym'},
                   {id:9 , amenitiy:'TV'},]
    
    }

    
  },

  components: {
    PictureInput
  },

  created() {
    console.log('this.user :>> ', this.user);
    console.log('this.newStay.host :>> ', this.newStay.host);
    this.newStay.host = this.user

    
  },
  methods: {
    goBack() {
      this.$router.push('/')
    },
    saveStay() {
      console.log(this.newStay)
      console.log(this.newStay.loc.country)
      const newImgUrls = this.imgUrlss.map((imgUrl) =>{
      if(imgUrl) return imgUrl['imgUrl']
      })

      this.newStay.imgUrls = newImgUrls
      console.log(this.newStay.imgUrls)
      this.$store.dispatch({ type: 'saveStay', stay: this.newStay })
      
  
      },

      print(){
        console.log(this.newStay.nAmenities)
      },

       
    push(id){
    if(this.newStay.amenities.indexOf(this.nAmenities[id].amenitiy) === -1)
    this.newStay.amenities.push(this.nAmenities[id].amenitiy)
    else{
    const index = this.newStay.amenities.indexOf(this.nAmenities[id].amenitiy)
    this.newStay.amenities.splice(index , 1)
    }
    console.log(this.newStay.amenities)
    },
    // chooseImage () {
    //   // this.$emit( event.target.files)
    //   this.$refs.imageDatas.click()
    // },

    // onSelectFile () {
    //   const input = this.$refs.fileInput
    //   const files = input.files
    //   if (files && files[0]) {
    //     const reader = new FileReader
    //     reader.onload = e => {
    //       this.imgUrl = e.target.result
    //     }
    //     reader.readAsDataURL(files[0])
    //     this.$emit('input', files[0])
    //   }
    // },

    async handleFile(ev , id) {
            const file = ev.type === 'change' ?
            ev.target.files[0] :
            ev.dataTransfer.files[0]
            console.log(file)
            console.log(id)
            const { url } = await uploadImg(file)
            console.log(url)
            this.imgUrlss[id].imgUrl = url
            // img(id)
  }

  },
  computed: {
    user() {
      return this.$store.getters.user
    },

    // img(id) {
    //         console.log(id)
    //         console.log(this.imgUrlss[id].imgUrl)
    //         return this.imgUrlss[id].imgUrl ?
    //         this.imgUrlss[id].imgUrl :
    //             'upload your image'
    //     },
  },

  watch: {
    'this.newStay.nAmenities':{
      handler() {
        console.log(this.newStay.nAmenities)
      },
      deep: true,
      immediate: true,
    }
  }
}

</script>
  
 <!-- <div v-for = "imageData in imageDatas"
// class="image-input"
// :style="{ 'background-image': `url(${imageData.imgUrl})`}"
// @click="chooseImage($event)"
// >
// <span
// v-if="!imageData.imgUrl"
// class="placeholder">
// Choose an Image
// </span>
// <input
// class="file-input"
// ref="imageDatas" 
// type="file"
// @input="onSelectFile"
// >
// </div> -->