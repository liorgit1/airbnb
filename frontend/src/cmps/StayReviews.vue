<template>
    <section  class="stay-reviews details-layout">





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
        averageCleanliness() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.cleanliness, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageCommunication() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.communication, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageAccuracy() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.accuracy, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageCheckIn() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.checkIn, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageLocation() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.location, 0) / this.stay.reviews.length).toFixed(1);
        },
        averageValue() {
            return (this.stay.reviews.reduce((sum, review) => sum + review.value, 0) / this.stay.reviews.length).toFixed(1);
        },
    },
    created() {
        console.log(' averageCleanliness :>> ', this.averageCleanliness);
        console.log(' averagCommunication :>> ', this.averageCommunication);
        console.log(' averageAccuracy :>> ', this.averageAccuracy);
        console.log(' averageCheckIn :>> ', this.averageCheckIn);
        console.log(' averageLocation :>> ', this.averageLocation);
        console.log(' averageValue :>> ', this.averageValue);
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

