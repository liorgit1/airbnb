<template>
  <section class="main-layout">
    <form  @submit.prevent="saveStay">
      
      <section style = "box-shadow: 0px 1px #00000014; padding-block: 20px; display: grid;row-gap: 10px;">
      <div class="stay-edit__input-box">
        Stay Name:
        <label for="txt" class="stay-edit__label"></label>
        <input v-model="newStay.name" id="txt" type="text" style ="border-bottom: 1px #E0E0E0 solid;" placeholder="Enter your stay name here..." />
      </div>

      <div>
        Enter your stay location country:
        <label for="country"></label>
        <input v-model="newStay.loc.country" id="country" type="text" style ="border-bottom: 1px #E0E0E0 solid;" placeholder="enter the country here..."/>
      </div>
      </section>

      
      <div style = "box-shadow: 0px 1px #00000014; padding-block: 20px;display: grid;row-gap: 10px;">
        Add images of your property:
        <section class="img-container">
      <label v-for = "imgUrl in imgUrlss" :key = imgUrl.id class="image-input" @drop.prevent="handleFile($event , imgUrl.id)" @dragover.prevent>
        <span
        v-if="!imgUrl.imgUrl"
        class="placeholder">
        Add an Image
        </span>
        <img v-else class="placeholder" :src= imgUrl.imgUrl alt="">
        <input type="file" @change="handleFile($event , imgUrl.id)" hidden>
      </label>
      </section>
      </div>

      <div class="stay-edit__input-box" style = "box-shadow: 0px 1px #00000014; padding-block: 20px;">
        Enter the price per night:
        <label class="stay-edit__label" for="price"></label>
        <input v-model.number="newStay.price" id="price" type="text" style ="border-bottom: 1px #E0E0E0 solid;" placeholder="enter the price here..."/>
      </div>


      <div style = "box-shadow: 0px 1px #00000014; padding-block: 20px;display: grid; row-gap: 10px;">
      Select the capacity: {{ newStay.capacity }}
      <select v-model.number = "newStay.capacity" style="width:150px; border: 1px #E0E0E0 solid">
        <option disabled value="">Please select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
    </div>

      <div class="grid" style = "box-shadow: 0px 1px #00000014; padding-block: 20px;row-gap: 5px;">
        Enter a brief summary of your property:
        <label for="summary"></label>
        <textarea v-model="newStay.summary"
        rows="5" cols="40" placeholder="enter your summary here"
        style="resize: none; width: 317px; border: 1px #E0E0E0 solid;"> 
        </textarea>
      </div>

      <section class="grid" style = "box-shadow: 0px 1px #00000014; padding-block: 20px;margin-bottom:20px;row-gap:10px;"> 
      Select your amenities:
      <section class="amenities-grid">
      <div v-for = "amenitiy in nAmenities" key:amenitiy.id>
        <input type="checkbox" for=""  @click="push(amenitiy.id)">
        <label> {{ amenitiy.amenitiy }} </label>
      </div>
      </section>
     </section>

      <section class="btn-section">
        <button class="btn">save</button>
        <button class="btn" @click="goBack">go back</button>
      </section>
    </form>
  </section>
</template>
  
<script>

import { stayService } from '../services/stay-service'
// import PictureInput from 'vue-picture-input'
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
        amenities:[],
        likedByUsers:[],
        host: {
          pictureUrl:'https://a0.muscache.com/im/pictures/user/241be2bb-a5b5-4768-a8de-4d2438e3bb42.jpg?im_w=240',
          _id:''
        },
       
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
                   {id:9 , amenitiy:'TV'},
                   {id:10 , amenitiy:'Washing machine'},
                   {id:11 , amenitiy:'Grill'},]
    
    }

    
  },

  components: {
    // PictureInput
  },

  created() {
    console.log('this.user :>> ', this.user);
    console.log('this.newStay.host :>> ', this.newStay.host);
    if(this.user)
    this.newStay.host._id = this.user._id

    
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
      location.reload()
  
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