<template>
    <section class="stay-info">
        <div class="host-info flex">
            <div>
                <h2>Cabin hosted by <span class="host-name">Max Holloway</span></h2>
                <ul class="stay-baths-beds flex">
                    <div>7 guests</div><span class="dot">·</span>
                    <div>6 beds</div><span class="dot">·</span>
                    <div>3 baths</div>
                </ul>
            </div><img class="mini-host-img"
                src="http://res.cloudinary.com/dqj9g5gso/image/upload/v1643443886/czwvsmeapypkoddutprc.jpg">
        </div>
        <ul class="stay-main-amenities-list">
            <li class="flex">
                <div>
                    <h3>Entire home</h3>
                    <p>You will have the cabin to yourself.</p>
                </div>
            </li>
            <li class="flex">
                <div>
                    <h3>Enhanced clean</h3>
                    <p>This Host committed to Airbnb's 5-step enhanced cleaning process.</p>
                </div>
            </li>
            <li class="flex">
                <div>
                    <h3>Self check-in</h3>
                    <p>Check yourself in with the lockbox.</p>
                </div>
            </li>
        </ul>
        <p class="stay-summery">If you would like to experience traditional Israeli country life style, our place is ideal.
            Our place is located in a picturesque farming village which is rich in nature near Golan Heights, Jordan River
            and the Manara Cliffs. You can enjoy our seasonal citrus fruits and tasty pecan nuts.</p>
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
