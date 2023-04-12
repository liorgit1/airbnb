<template>
  <section class="flex-col review-section">
    <div class="upper-review flex">
      <!-- <div class="review-img">
        <img class="img" :src="`${review.by.imgUrl}`" />
      </div> -->
      <div class="review-img q-pa-md q-gutter-sm">
        <q-avatar>
          <img class="img" :src="getImage" />
        </q-avatar>
      </div>
      <div class="review-titles">
        <h1 class="name">{{ review.by.fullname }}</h1>
        <h2 class="date">{{ formatDate }}</h2>
      </div>
    </div>
    <review-txt :review="review"></review-txt>
    <!-- <p class="paragraph-review">{{ review.txt }}</p> -->
  </section>
</template>

<script>
  import {utilService} from '../../services/util-service'
  import reviewTxt from './review-txt.vue';
export default {
  name: "reviews",
  props: {
    review: {
      type: Object,
    },
  },
  createad() {},
  data() {
    return {
      start: new Date(2021, 0, 1) ,
      end: new Date(),
    };
  },
  computed: {
    getImage() {
      const key= utilService.getRandomInt(0, 50)
      return `https://i.pravatar.cc/150?img=${key}`
    },
   formatDate() {
  const time= new Date(this.start.getTime() + Math.random() * (this.end.getTime() - this.start.getTime()));
  return time.toLocaleDateString('en')
}


},
  components:{
    reviewTxt
  }
};
</script>

<style></style>






