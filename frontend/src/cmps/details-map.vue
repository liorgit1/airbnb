<template>
  <hr class="hr-border" />
  <section id="map">
    <h2>Where you’ll be</h2>
    <p>
      {{ stay.loc.country }}
      <span>{{ stay.loc.city }}</span>
    </p>

    <GMapMap style="width: 100%; height: 500px" :center="center" :zoom="10" map-type-id="terrain">

      <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center = m.position"
        :icon="'https://res.cloudinary.com/yonatan-cajan22/image/upload/v1648371973/airyny/MAPS.gif'" />

    </GMapMap>
  </section>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'
export default {
  components: { GoogleMap, Marker },
  name: "mapDetails",
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {
      center: {
        lat: this.stay.loc.lan,
        lng: this.stay.loc.lat,
      },
      markers: [
        {
          position: {
            lat: this.stay.loc.lan,
            lng: this.stay.loc.lat,
          },
          icon: {},
        },
      ],
    };
  },
  created() {
    this.icon = {
      fillColor: "#FF0000",
      fillOpacity: 0.2,
      strokeWeight: 1,

      scale: 1,
    };
  },
  methods: {},
};
</script>

<style></style>

