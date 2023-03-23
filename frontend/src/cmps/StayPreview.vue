<template>
  <section>
    <ul class="home-list">
       <img
          class="home-img"
          :src="`https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large`"
          alt="img rated stay"
        />
       
        <div class="txt-list">
          <h3 class="country-name popular">
      <p>{{ stay.loc.country }},{{ stay.loc.city }}</p> 
      <p>{{ stay.labels[0]}}</p>
      <p><strong>${{ stay.price}}</strong> night</p>
      <p>mar 1-8</p>

          </h3>
        </div>
      <!-- </li> -->
    </ul>

    
  </section>
</template>
<script>
export default {
  name: "stay-preview",
  props: {
    stay: {
      type: Object,
    },
  },

  computed: {
    
  },created() {
  },

}

</script>

<style>
.txt-list{
  line-height: 1px;
}

</style>

