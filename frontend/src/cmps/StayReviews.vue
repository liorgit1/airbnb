<template>
    <section class="stay-reviews details-layout">
        <div class="review-container">
            <div class="reviews-list">


                <div class="review">
                    <div class="flex">
                        <img class="mini-host-img " :src="stay.reviews[0].by.imgUrl">
                        <div style="margin-bottom: 13px;" class="flex-col">
                            <span>{{ stay.reviews[0].by.fullname }}</span>
                            <span style="width: max-content ;">Jun 2023</span>
                        </div>
                    </div>
                    <div style="width: max-content;max-width: 300px;">{{ stay.reviews[0].txt }}</div>



                </div>



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





