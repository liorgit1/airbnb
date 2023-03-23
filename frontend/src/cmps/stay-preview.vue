<template>
  <section>
    <ul class="home-list">
      <li
        class="home-card clickable"
        v-for="stay in ratedStays"
        :key="stay._id"
        @click="goToStay(stay)"
      >
        <img
          class="home-img"
          :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay}1.jpg`"
          alt="img rated stay"
        />
        <div class="txt-container">
          <h3 class="country-name popular">
            {{ stays }}
          </h3>
        </div>
      </li>
    </ul>

    <div class="unique-dest-list popular-dest-list">
      <h2 class="popular-header">
        <span>Unique Destinations</span>
      </h2>
      <ul class="home-list">
        <li
          class="home-card clickable"
          v-for="stay in uniqueStays"
          :key="stay._id"
          @click="goToUnique(stay)"
        >
          <img
            class="home-img"
            :src="`https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648051428/airyny/${stay.country}`"
            alt="img unique stay"
          />
          <div class="unique-txt">
            <h3 class="country-name">
              {{ stays.loc.country }}
            </h3>
            <span class="dist-country">{{ stay.km }}</span>
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
      ratedStays: ["New York", "Barcelona", "Porto", "Sydney"],
      uniqueStays: [
        {
          country: "Canada",
          id: "62447fdb4a61d0a384daa6dd",
          km: "9,644km",
        },
        {
          country: "Japan",
          id: "62447e554a61d0a384d970b2",
          km: "9,079 km",
        },
        {
          country: "Norway",
          id: "62447b7a4a61d0a384d6ed7f",
          date: "mar 1-6",
          km: "5,315.6km",
        },
        {
          // 11115999
          country: "Philippines",
          id: "62447f9d4a61d0a384da7580",
          km: "8,979km",
        },
      ],
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
  computed: {
    stays() {
      return console.log(this.$store.getters.stays);
    },
  },created() {
    console.log(stays);
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

    goToUnique(stay) {
      delete stay.km;
      this.$router.push(`/stay/${stay.id}`);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
