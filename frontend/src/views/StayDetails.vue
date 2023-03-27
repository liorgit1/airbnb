<template>
    <section v-if="stay" class="stay-details details-layout" @click="this.showModal = false">


        <!-- <section> -->
        <div class="gc23" style="height: 76px;">

            <h1> {{ stay.name }}</h1>
            <div class="likeAndShare">
                <p class="placeLink fs16"> <img src="../assets/pngs/star.png" alt=""> {{ stay.loc.city }}, {{
                    stay.loc.country }}</p>
                <span class="fs16">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false"
                        style="fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;">
                        <g fill="none">
                            <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                            <path d="M16 3v23V3z"></path>
                            <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                        </g>
                    </svg>
                    <a>share</a>
                </span>
                <span class="fs16">
                    <a> <img style="width:16px ; " src="../assets/pngs/heart.png"> Save</a>
                </span>
            </div>
        </div>
        <div class="detailsImgContainer">
            <!-- <img v-for="(url, index) in stay.imgUrls" :key="index" :src="url || stay.imgUrls[0]"
                :class="'img img' + (index + 1)"> -->
                
            <!-- <img :src="stay.imgUrls[0]" class="img img1">
            <img :src="stay.imgUrls[1] || stay.imgUrls[0]" class="img img2">
            <img :src="stay.imgUrls[2] || stay.imgUrls[0]" class="img img3">
            <img :src="stay.imgUrls[3] || stay.imgUrls[0]" class="img img4">
            <img :src="stay.imgUrls[4] || stay.imgUrls[0]" class="img img5"> -->
        </div>
        <section class="info-container">
            <!-- <div>   -->
            <Reservation @click.stop :stay="stay" @openModal="this.showModal = true" />
            <!-- <GuestsModal v-if="showModal" /> -->
            <!-- </div> -->
            <div class="flex-col">
                <StayInfo :stay="stay" />
                <StayAmenities :stay="stay" />
            </div>
        </section>


        <!-- </section> -->

        <pre>{{ stay }}</pre>

    </section>
</template>


<script>
// import { stayService } from '../services/stay.service.local'
import GuestsModal from '../cmps/GuestsModal.vue'
import Reservation from '../cmps/reservation.vue'
import StayInfo from './StayInfo.vue'
import StayAmenities from './StayAmenities.vue'

import { stayService } from '../services/stay.service.local.js'


export default {

    data() {
        return {
            showModal: false,
            stay: null
        }
    },
    computed: {

    },
    async created() {
        // this.$store.dispatch({ type: 'loadStays' })

        const { id } = this.$route.params
        console.log('this.$route.params :>> ', this.$route.params);

        if (id) {
            const stay = await stayService.getById(id)
            this.stay = stay
        }
    },
    methods: {

    },
    components: {
        Reservation,
        StayInfo,
        StayAmenities,
        GuestsModal
    }
    , computed: {


        // stay() {
        //     return this.$store.getters.stays[0]
        // }
    },


}
</script>
