<template>
  <li class="stay-preview-container">
    <section class="stay-preview clickable">
      <div class="stay-preview">
        <div class="stay-preview-gallery">
          <section>
            <img-carousel indicator-position="" :imgs="stay.imgUrls" class="card-img" />
          </section>
          <div>
            <span class="icon-heart">
              <svg :class="isLiked" @click.stop="setLiked" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" role="presentation" focusable="false" style="
                  display: block;
                  height: 24px;
                  width: 24px;
                  fill: rgba(0, 0, 0, 0.5);
                  stroke-width: 2;
                  overflow: visible;
                  stroke: white;
                ">
                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791
              0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949
              2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="stay-preview-info">
          <div class="flex card-rate">
            <span class="preview-rate">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false" style="
                  display: inline;
                  height: 12px;
                  width: 12px;
                  fill: black;
                ">

                <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
                   9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
                   7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd">
                </path>
              </svg>
              {{ totalAverage }} </span>
          </div>

          <div class="stay-type">
            {{ stay.loc.country }}<span>, </span>
            {{ stay.loc.city }}
          </div>
          <div class="stay-name">{{ stay.bedrooms }} beds</div>
          <div class="stay-date">{{ stay.type }}</div>
          <div class="stay-price">
            <span class="bold">${{ stay.price }}</span>
            night
          </div>
        </div>
      </div>
    </section>
  </li>
</template>
      
<script>
import imgCarousel from './img-carousel.vue';
export default {
  name: "stay-preview",
  props: {
    stay: {
      type: Object,
    },
  },

  data() {
    return {
      liked: false,
      isLiked: false
    };
  },

  computed: {
    averageCleanliness() {
      return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Cleanliness, 0) / this.stay.reviews.length).toFixed(1);
    },
    averageCommunication() {
      return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Communication, 0) / this.stay.reviews.length).toFixed(1);
    },
    averageAccuracy() {
      return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Accuracy, 0) / this.stay.reviews.length).toFixed(1);
    },
    averageCheckIn() {
      return (this.stay.reviews.reduce((sum, review) => sum + review.rate.CheckIn, 0) / this.stay.reviews.length).toFixed(1);
    },
    averageLocation() {
      return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Location, 0) / this.stay.reviews.length).toFixed(1);
    },
    averageValue() {
      return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Value, 0) / this.stay.reviews.length).toFixed(1);
    },
    totalAverage() {
      return ((+this.averageCleanliness + +this.averageCommunication + +this.averageAccuracy + +this.averageCheckIn +
        +this.averageLocation + +this.averageValue) / 6).toFixed(2)
    }

  },


  created() {
  },


  methods: {
    // getRating() {
    //   return this.stay.reviews.rate / stay.country.length ;
    // },
    // getStay(){
    //   this.$emit('getStay',{stayId:this.stay._id})
    // }
  },
  // computed: {
  //   isLiked() {
  //     return this.liked ? "isLiked" : "";
  //   },
  // },
  components: {
    imgCarousel,
  },

}

</script>

<style>
.txt-list {
  line-height: 1px;
}
</style>

