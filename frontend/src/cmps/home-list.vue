<template>
  <section class="main-layout">
    <div class="popular-dest-list main-layout">
      <h2 class="popular-header">
      </h2>
      <ul class="home-list">
        <li
          class="home-card clickable"
          v-for="stay in ratedStays"
          :key="stay._id"
          @click="goToStay(stay)"
        >
          <img
            class="home-img"
            :src="stay.imgUrls[0]"
            alt="img rated stay"
          />
          <div class="txt-container">
            <h3 class="country-name popular">
              {{ stay }}
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        country: "",
        guests: {
          adults: 0,
          kids: 0,
          Infants: 0,
        },
        stayTime: "",
        type: [],
        price: {
          minPrice: 30,
          maxPrice: 2000,
        },
      },
    };
  },

  methods: {
    goToStay(stay) {
      this.filterBy.country = stay;
      this.$store.dispatch({
        type: "setFilter",
        filterBy: JSON.parse(JSON.stringify(this.filterBy)),
      });
      this.$router.push(`/stay`);
      window.scrollTo(0, 0);
    },

  },
};
</script>

<style></style>
