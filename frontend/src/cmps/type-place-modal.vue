<template>
  <div class="modal-container flex-col">
    <div class="higer-modal-section">
    <div class="type-filter">
      <label class="type-filter-container flex">
        <div class="flex-col">
          <span class="type-header">Entire place</span>
          <span class="type-title"
            >Have a place to yourself</span
          >
        </div>
        <input
          type="checkbox"
          id="entire place"
          value="Entire home/apt"
          class="checkmark"
          v-model="sortBy"
        />
      </label>
    </div>
    <div class="type-filter">
      <label class="type-filter-container flex">
        <div class="flex-col">
          <span class="type-header">Private room</span>
          <span class="type-title">
            Have your own room and share some common spaces
          </span>
        </div>
        <input
          type="checkbox"
          id="private room"
          value="Private room"
          class="checkmark"
          v-model="sortBy"
        />
      </label>
    </div>

    <div class="type-filter">
      <label class="type-filter-container flex">
        <div class="flex-col">
          <span class="type-header">Hotel room</span>
          <span class="type-title">
            Have a private or shared room in a boutique
            hotel, hostel, and more
          </span>
        </div>
        <input
          type="checkbox"
          id="hotel room"
          value="Hotel room"
          class="checkmark"
          v-model="sortBy"
        />
      </label>
    </div>

    <div class="type-filter">
      <label class="type-filter-container flex">
        <div class="flex-col">
          <span class="type-header">Shared room</span>
          <span class="type-title">
            Stay in a shared space, like a common room
          </span>
        </div>
        <input
          type="checkbox"
          id="shared room"
          value="Shared room"
          class="checkmark"
          v-model="sortBy"
        />
      </label>
    </div>
    </div>
    <div class="type-save flex space-between lower-modal-section">
      <button class="clear-btn" @click="clearFilter">
        Clear</button
      ><button class="save-btn" @click="setSort">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortBy: [],
    };
  },
  created() {
    this.sortBy = this.$store.getters.filterBy.type;
  },
  methods: {
    setSort() {
      this.$emit("sort", this.sortBy);
    },
    clearFilter() {
      this.sortBy = [];
    },
  },
};
</script>

<style></style>
