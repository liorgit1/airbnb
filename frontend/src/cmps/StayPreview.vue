<template>
  <section>
    <ul class="home-list">
      <img @click="this.$router.push('/stay/' + stay._id)"
      class="home-img"
        :src="stay.imgUrls[0]"
        alt="img rated stay"
        />     
        <div class="txt-list">
        <h3 class="country-name popular">{{ stay.loc.country }},{{ stay.loc.city }}</h3>
          <p>{{ stay.labels[0]}}</p>
          <p><strong>${{ stay.price}}</strong> night</p>
          <p>mar 1-8</p>
        </div>
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

