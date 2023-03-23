<template>
  <section class="main-layout2">
    <div class="explore-buttons flex">
      <button
        @click="ChangeModalPrice"
        class="sort-btn relative flex align-center"
      >
        Price
        <span>
          <svg :class="modalPrice ? 'rotate':''"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
              margin-left:9.5px
            "
          >
            <g fill="none">
              <path
                d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <!-- <priceModal
      v-close="ChangeModalPrice"
        :stays="stays"
        v-if="modalPrice"
        @filterByPrice="setFilterByPrice"
      /> -->

      <button
        @click="ChangeModalType"
        class="sort-btn flex align-center"
      >
        Type of place
        <span>
          <svg :class="modalType ? 'rotate':''"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
              margin-left:9.5px
            "
          >
            <g fill="none">
              <path
                d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <!-- <typePlaceModal v-if="modalType" @sort="setSort"  v-close="ChangeModalType" /> -->
      <button
        class="sort-btn small-btn"
        @click="setSortAmenities('Wifi')"
      >
        Wifi
      </button>
      <button
        class="sort-btn small-btn"
        @click="setSortAmenities('TV')"
      >
        TV
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Kitchen')"
      >
        Kitchen
      </button>
      <button
        class="sort-btn small-btn"
        @click="setSortAmenities('AC')"
      >
        AC
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Smoking Allowed')"
      >
        Smoking Allowed
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Pet Allowed')"
      >
        Pet Allowed
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Pet Allowed')"
      >
        Gym
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Pet Allowed')"
      >
        Elevator
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Pet Allowed')"
      >
        Breakfast
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Pet Allowed')"
      >
        Pool
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Pet Allowed')"
      >
        Washer
      </button>
      <button
        class="sort-btn"
        @click="setSortAmenities('Pet Allowed')"
      >
        Iron
      </button>
    </div>

    <h1>{{ title }}</h1>


    <stay-list
      :stays="stays"
      v-if="stays"
      @stayLiked="setLiked"
    >
    </stay-list>
    <div v-if="!stays?.length">
      <img class="loading-img" src="../assets/loader.gif" />
    </div>
  </section>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import stayList from "../cmps/stay-list.vue";
import typePlaceModal from "../cmps/type-place-modal.vue";
import { userService } from "../services/user.service.js";

export default {
  created() {},
  data() {
    return {
      filterBy: {
        price: {
          minPrice: 30,
          maxPrice: 2000,
        },
        type: [],
        amenities: [],
      },
      modalPrice: false,
      modalType: false,
      modalLoginIsOpen: false,
    };
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    title() {
      const filter = this.$store.getters.filterBy;
      const count = this.$store.getters.stays;
      if (!filter || !count) return;
      return filter.country
        ? `${count.length} stays in ${filter.country}`
        : "explore stays";
    },
  },
  methods: {
  },
  components: {
    appHeader,
    stayList,
    typePlaceModal,
  },
};
</script>

<style></style>
