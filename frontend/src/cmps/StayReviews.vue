<template>
    <section class="stay-reviews details-layout stay-review-layout">


        <div class="overall-rating">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false"
                style="display: block; height: 14px; width: 14px; fill: currentcolor;margin-inline-end: 8px;">
                <path
                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                    fill-rule="evenodd"></path>
            </svg>
            <span class="fs22">{{ totalAverage }}</span> ·
            <a class="fs22" style="text-decoration: none; color: black;" href="#reviews">{{ this.stay.reviews.length }}
                Reviews</a>



        </div>


        <div class="review-container">

            <div class="rating">
                <p>Cleanliness</p>
                <span class="progress-container fs12">
                    <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                        :percentage="+this.averageCleanliness * 100 / 5">
                    </el-progress>{{ averageCleanliness }}</span>

                <p>Communication</p>
                <span class="progress-container fs12">
                    <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                        :percentage="+this.averageCommunication * 100 / 5">
                    </el-progress>{{ averageCommunication }}</span>


                <p>Check-in</p>
                <span class="progress-container fs12">
                    <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                        :percentage="+this.averageCheckIn * 100 / 5">
                    </el-progress>{{ averageCheckIn }}</span>

                <p>Accuracy</p>
                <span class="progress-container fs12">
                    <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                        :percentage="+this.averageAccuracy * 100 / 5">
                    </el-progress>{{ averageAccuracy }}</span>

                <p>Location</p>
                <span class="progress-container fs12">
                    <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                        :percentage="+this.averageLocation * 100 / 5">
                    </el-progress>{{ averageCommunication }}</span>

                <p>Value</p><span class="progress-container fs12">
                    <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                        :percentage="+this.averageValue * 100 / 5">
                    </el-progress>{{ averageValue }}</span>
            </div>



            <!-- <div class="demo-progress">

                <el-button text>Cleanliness</el-button>
                <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                    :percentage="+this.averageCleanliness * 100 / 5">
                </el-progress>

                <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                    :percentage="+this.averageCheckIn * 100 / 5">
                    <el-button text>checkIn</el-button>
                </el-progress>

                <el-progress style="width:124px;" :stroke-width="4" :show-text="false" :color="'black'"
                    :percentage="+this.averageCommunication * 100 / 5">
                    <el-button text>Communication</el-button>
                </el-progress>

            </div> -->

            <div class="reviews-list">

                <div v-for="(review, index) in stay.reviews" :key="index" class="review">
                    <div class="flex">
                        <img class="mini-guest-img" :src="review.by.imgUrl">
                        <div style="margin-bottom: 13px;" class="flex-col">
                            <span style="margin-block-start: -3px; margin-block-end: -7px;">{{ review.by.fullname
                            }}</span>
                            <span class="fs14" style="width: max-content;">{{ months[index] }} 2023{{ review.date }}</span>
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


import { utilService } from '../services/util-service';

export default {
    props: {
        stay: {
            type: Object,
        },
    },
    data() {
        return {
            months: ['Jan', 'Feb', 'Mar','Apr','Jan', 'Feb', 'Mar','Apr','Jan', 'Feb', 'Mar','Apr','Jan', 'Feb', 'Mar','Apr']
        }
    },
    computed: {

        randomMonth() {
            return utilService.getRandomInt(0, this.months.length)
        },

        averageCleanliness() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Cleanliness, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageCommunication() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Communication, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageAccuracy() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Accuracy, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageCheckIn() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.rate.CheckIn, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageLocation() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Location, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageValue() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.rate.Value, 0) / this.stay.reviews.length).toFixed(1);
        },
        totalAverage() {
            return ((+this.averageCleanliness + +this.averageCommunication + +this.averageAccuracy + +this.averageCheckIn +
                +this.averageLocation + +this.averageValue) / 6).toFixed(2)
        }
    },
    created() {
        //     console.log(' averageCleanliness :>> ', this.averageCleanliness);
        //     console.log(' averagCommunication :>> ', this.averageCommunication);
        //     console.log(' averageAccuracy :>> ', this.averageAccuracy);
        //     console.log(' averageCheckIn :>> ', this.averageCheckIn);
        //     console.log(' averageLocation :>> ', this.averageLocation);
        //     console.log(' averageValue :>> ', this.averageValue);
    }, mounted() {
        this.$emit('setTotalRate', { totalRate: this.totalAverage })

    },
    methods: {



    },
}








</script>





<style scoped>
.percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 28px;
}

.percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
}

.demo-progress .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
}

.demo-progress .el-progress--circle {
    margin-right: 15px;
}
</style>

