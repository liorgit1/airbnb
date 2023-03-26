<template>
    <section v-if="stay" class="stay-details main-layout" @click="this.showModal=false">


        <!-- <section> -->
            <divg class="gc23">

                <h1> {{ stay.name }}</h1>
                <div class="likeAndShare">
                    <p class="placeLink">{{ stay.loc.city }}, {{ stay.loc.country }}</p>

                    <a>like</a>
                    <a>share</a>
                </div>
            </divg>
            <div class="detailsImgContainer">
                <img :src="stay.imgUrls[0]" class="img img1">
                <img :src="stay.imgUrls[1] || stay.imgUrls[0]" class="img img2">
                <img :src="stay.imgUrls[2] || stay.imgUrls[0]" class="img img3">
                <img :src="stay.imgUrls[3] || stay.imgUrls[0]" class="img img4">
                <img :src="stay.imgUrls[4] || stay.imgUrls[0]" class="img mainIgm">
            </div>
            <section class="info-container">
                <GuestsModal  v-if="showModal" />
                <Reservation @click.stop :stay="stay" @openModal="this.showModal = true" />
                <div class="flex-col">
                    <StayInfo :stay="stay" />
                    <StayAmenities :stay="stay" />
                </div>
            </section>


        <!-- </section> -->

        <!-- <pre>{{ stay }}</pre> -->

    </section>
</template>


<script>
// import { stayService } from '../services/stay.service.local'
import GuestsModal from '../cmps/GuestsModal.vue'
import Reservation from '../cmps/Reservation.vue'
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
