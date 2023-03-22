<template>
    <section>


        <section class="detailsMainGrid">
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
            <reservation/>
        </section>
    </section>
</template>


<script>
import reservation from '../cmps/reservation.vue'



export default {
    data() {

    },
    computed: {

    },
    created() {

    },
    methods: {
    }, components: {
        reservation
    }


}
</script>
