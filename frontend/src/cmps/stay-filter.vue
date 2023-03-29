<template>
  <section class="filter flex align-center">
    <div
      class="main-filter flex space-between align-center"
    >
      <div class="input-container flex-col">
        <label class="location-filter">
          <span class="title-destination">Location</span>
          <input
            type="search"
            list="destination"
            placeholder="Where are you going?"
            class="dropdown clickable"
            v-model="filterBy.country"
            autocomplete="off"
            spellcheck="off"
            v-text="message"
          />
          <datalist id="destination" class="caret-hide">
            <option value="Porto"></option>
            <option value="Barcelona"></option>
            <option value="Istanbul"></option>
            <option value="New York"></option>
            <option value="Montreal"></option>
            <option value="Rio de Janeiro"></option>
          </datalist>
        </label>
      </div>

      <svg
        height="60"
        width="1"
        style="
          margin-left: 50px;
          margin-right: 34px;
          padding-top: 10px;
        "
      >
        <line
          x1="2"
          y1="0"
          x2="1"
          y2="35"
          style="
            stroke: rgb(225, 225, 225, 1);
            stroke-width: 3;
          "
        ></line>
      </svg>
      <div
        class="main-time-picker input-container flex-col date-list"
      >
        <div class="container-check flex-col">
          <div class="container-check-in-out flex">
            <span class="btn-check-in"> Check in</span
            ><span class="btn-check-out"> Check out </span>
          </div>
          <span class="demonstration"></span>
          <el-date-picker
            v-model="filterBy.stayTime"
            type="daterange"
            range-separator=""
            start-placeholder="Add dates "
            end-placeholder="Add dates"
            size="small"
          >
          </el-date-picker>
        </div>
      </div>
      <svg
        class="line-container-2"
        height="60"
        width="1"
        style="
          margin-left: 102px;
          margin-right: -2px;
          padding-top: 10px;
        "
      >
        <line
          x1="2"
          y1="0"
          x2="1"
          y2="35"
          style="
            stroke: rgb(225, 225, 225, 1);
            stroke-width: 3;
          "
        ></line>
      </svg>
      <div
        class="input-container flex-col"
        @click="openModal"
      >
        <!-- tabindex="0" -->
        <span class="border-guests flex-col">
          <label class="guests-label"> Guests </label>
          <span class="guests"> {{ getGuests }}</span>
        </span>
      </div>
      <div
        v-if="guestModal"
        class="guests-Modal"
        v-close="openModal"
      >
        <!-- @blur="closeDropdown -->
        <ul>
          <li
            class="guest-li flex space-between align-center"
          >
            <span class="flex-col"
              >Adults
              <span class="guide-age"
                >Ages 13 or above
              </span>
            </span>
            <span>
              <button @click="incAdults(-1)">-</button>
              {{ filterBy.guests.adults }}
              <button @click="incAdults(1)">+</button>
            </span>
          </li>
          <li class="flex space-between align-center">
            <span class="flex-col">
              Children
              <span class="guide-age"> Ages 2-12 </span>
            </span>
            <span>
              <button @click="incKids(-1)">-</button>
              {{ filterBy.guests.kids }}
              <button @click="incKids(1)">+</button>
            </span>
          </li>
          <li class="flex space-between align-center">
            <span class="flex-col">
              Infants
              <span class="guide-age">Under 2 </span>
            </span>
            <span>
              <button @click="incInfants(-1)">-</button>
              {{ filterBy.guests.Infants }}
              <button @click="incInfants(1)">
                +
              </button></span
            >
          </li>
        </ul>
      </div>
      <label @click="setFilter">
        <div class="search-btn">
          <button>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: white;
                stroke-width: 5.333333333333333;
                overflow: visible;
              "
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 
          0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </label>
    </div>
 </section>
</template>

<script>
import { utilService } from "../services/util-service.js";

export default {
  name: "stay-filter",
  data() {
    return {
      guestModal: false,
      pickerOptions: {
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(
                start.getTime() - 3600 * 1000 * 24 * 7
              );
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      filterBy: null,
    };
  },
  created() {
    this.setFilter = utilService.debounce(
      this.setFilter,
      500
    );
    this.filterBy = JSON.parse(JSON.stringify(this.$store.getters.filterBy));
  },
  methods: {
    setFilter() {
      this.$store.dispatch({
        type: "setFilter",
        filterBy: ({...this.filterBy}),
      });
      this.$router.push(`/stay`);
      this.guestModal = false;
      this.$emit(
        "filterd",
        JSON.parse(JSON.stringify(this.filterBy))
      );
    },

    // closeDropdown() {
    //   this.guestModal = false;
    // },

    openModal() {
      this.guestModal = !this.guestModal;
    },
    incAdults(val) {
      this.filterBy.guests.adults =
        this.filterBy.guests.adults + val;
      if (this.filterBy.guests.adults === -1)
        this.filterBy.guests.adults = 0;
    },
    incKids(val) {
      this.filterBy.guests.kids =
        this.filterBy.guests.kids + val;
      if (this.filterBy.guests.kids === -1)
        this.filterBy.guests.kids = 0;
    },
    incInfants(val) {
      this.filterBy.guests.Infants =
        this.filterBy.guests.Infants + val;
      if (this.filterBy.guests.Infants === -1)
        this.filterBy.guests.Infants = 0;
    },
  },
  computed: {
    getGuests() {
      if (
        this.filterBy.guests.adults === 0 &&
        this.filterBy.guests.kids === 0 &&
        this.filterBy.guests.Infants === 0
      ) {
        return `Add guests`;
      } else {
        const count =
          this.filterBy.guests.adults +
          this.filterBy.guests.kids +
          this.filterBy.guests.Infants;
        return `${count} guests`;
      }
    },
  },
};
</script>

<style></style>
