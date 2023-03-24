<template>
    <section v-if="stay" class="stay-details main-layout">


        <section>
            <div >

                <h1> {{ stay.name }}</h1>
                <div class="likeAndShare">
                    <p class="placeLink">{{ stay.loc.city }}, {{ stay.loc.country }}</p>
                    
                    <a>like</a>
                    <a>share</a>
                </div>
            </div>
            <div class="detailsImgContainer">
                <img :src="stay.imgUrls[0]" class="img img1">
                <img :src="stay.imgUrls[1] || stay.imgUrls[0]" class="img img2">
                <img :src="stay.imgUrls[2] || stay.imgUrls[0]" class="img img3">
                <img :src="stay.imgUrls[3] || stay.imgUrls[0]" class="img img4">
                <img :src="stay.imgUrls[4] || stay.imgUrls[0]" class="img mainIgm">
            </div>
            <section class="info-container">
                <reservation :stay="stay" />
                <div>
                    <StayInfo :stay="stay" />
                    <StayAmenities />
                </div>
            </section>


        </section>

        <pre>{{stay }}</pre>

    </section>
</template>


<script>
// import { stayService } from '../services/stay.service.local'
import reservation from '../cmps/reservation.vue'
import StayInfo from './StayInfo.vue'
import StayAmenities from './StayAmenities.vue'



export default {
    data() {
        return {

            // stay:null
        }
    },
    computed: {

    },
    async created() {
        this.$store.dispatch({ type: 'loadStays' })

        // const { stayId } = this.$route.params
        // if (stayId) {
        //     stayService.getById(stayId).then((stay) => {
        //         this.stay = stay
        //     })
        // }
    },
    methods: {
    }, components: {
        reservation,
        StayInfo,
        StayAmenities
    }
    , computed: {
        stay() {
            return this.$store.getters.stays[0]
        }
    },


}
</script>
