<template>
    <section class="stay-reviews details-layout">
        <div class="review-container">
            <div class="reviews-list">

                <div v-for="(review, index) in stay.reviews" :key="index" class="review">
                    <div class="flex">
                        <img class="mini-guest-img" :src="review.by.imgUrl">
                        <div style="margin-bottom: 13px;" class="flex-col">
                            <span style="margin-block-start: -3px; margin-block-end: -7px;">{{ review.by.fullname }}</span>
                            <span class="fs14" style="width: max-content;">Jun 2023{{ review.date }}</span>
                        </div>
                    </div>
                    <div class="fs14" style="width: max-content; max-width: 400px;">{{ review.txt }}</div>
                </div>

                <!-- 

                <div class="review">
                    <div class="flex">
                        <img class="mini-guest-img " :src="stay.reviews[0].by.imgUrl">
                        <div style="margin-bottom: 13px;" class="flex-col">
                            <span style="    margin-block-start: -3px; margin-block-end: -7px;">
                                {{ stay.reviews[0].by.fullname }}</span>

                            <span  class="fs14" style="width: max-content ;">Jun 2023</span>
                        </div>
                    </div>
                    <div class="fs14" style="width: max-content;max-width: 400px;">{{ stay.reviews[0].txt }}</div>
                </div>

                <div class="review">
                    <div class="flex">
                        <img class="mini-guest-img " :src="stay.reviews[0].by.imgUrl">
                        <div style="margin-bottom: 13px;" class="flex-col">
                            <span style="    margin-block-start: -3px; margin-block-end: -7px;">
                                {{ stay.reviews[0].by.fullname }}</span>
                            <span  class="fs14" style="width: max-content ;">Jun 2023</span>
                        </div>
                    </div>
                    <div class="fs14" style="width: max-content;max-width: 400px;">{{ stay.reviews[0].txt }}</div>
                </div>

                <div class="review">
                    <div class="flex">
                        <img class="mini-guest-img " :src="stay.reviews[0].by.imgUrl">
                        <div style="margin-bottom: 13px;" class="flex-col">
                            <span style="    margin-block-start: -3px; margin-block-end: -7px;">
                                {{ stay.reviews[0].by.fullname }}</span>
                            <span  class="fs14" style="width: max-content ;">Jun 2023</span>
                        </div>
                    </div>
                    <div class="fs14" style="width: max-content;max-width: 400px;">{{ stay.reviews[0].txt }}</div>
                </div>

                <div class="review">
                    <div class="flex">
                        <img class="mini-guest-img " :src="stay.reviews[0].by.imgUrl">
                        <div style="margin-bottom: 20px;" class="flex-col">
                            <span style="    margin-block-start: -3px; margin-block-end: -7px;">
                                {{ stay.reviews[0].by.fullname }}</span>
                            <span  class="fs14" style="width: max-content ;">Jun 2023</span>
                        </div>
                    </div>
                    <div class="fs14" style="width: max-content;max-width: 400px;">{{ stay.reviews[0].txt }}</div>
                </div>

            -->



            </div>
        </div>
    </section>
</template>


<script>




export default {
    props: {
        stay: {
            type: Object,
        },
    },
    data() {
        return {

        }
    },
    computed: {

    },
    created() {
        console.log('stay :>> ', this.stay);
    },
    methods: {



    },
}
</script>





