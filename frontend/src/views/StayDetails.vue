<template>
    <section class="detailsMainGrid" >


        <section >
            <h1> Castle in Crete</h1>
            <div class="likeAndShare">
                <p class="placeLink">Siena, Italy</p>

                <a>like</a>
                <a>share</a>
            </div>
            <div class="detailsImgContainer">
                <div class="img img1"></div>
                <div class="img img2"></div>
                <div class="img img3"></div>
                <div class="img img4"></div>
                <div class="img mainIgm"></div>
            </div>
            <section class="infoGrid">
                <reservation />
                <StayInfo />
            </section>


        </section>
    </section>
</template>


<script>
import reservation from '../cmps/reservation.vue'
import StayInfo from './StayInfo.vue'



export default {
    data() {

    },
    computed: {

    },
    created() {

    },
    methods: {
    }, components: {
        reservation,
        StayInfo
    }


}
</script>
