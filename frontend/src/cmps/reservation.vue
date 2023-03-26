<template>
    <!-- <section class="reservationModal">
        <div class="flex space-between">
            <span>
                <span class="bigSpan">${{ stay.price }} </span><span> night</span>

            </span>
            <span>4.84 · 281 reviews</span>



        </div>
        <section class="datePick">
            <div class="check-in fs12">CHECK-IN</div>
            <div class="check-out fs12">CHECKOUT</div>
            <div class="guest-num fs12">GUESTS</div>

        </section>
        <reservationBtn/>

    </section> -->




    <main>
        <section class="order-container">

            <div class="order-form-header">
                <p><span class="cost">{{ stay.price }}</span> / night</p>
                <p>4.38 <span class="reviews">(4 reviews)</span></p>
            </div>

            <form class="reservation-form">
                <div class="order-data">
                    <div class="date-picker">
                        <div class="date-input">
                            <label>CHECK IN</label>
                            <input value="Tue Sep 07 2021">
                        </div>
                        <div class="date-input">
                            <label>CHECK OUT</label>
                            <input value="Tue Sep 07 2021">
                        </div>
                    </div>

                    <div class="guest-input"  @click="$emit('openModal')">
                        <label>GUESTS</label>
                        <input value="2">
                        <input type="text">
                        <svg viewBox="0 0 320 512" width="100" title="angle-down">
                            <path
                                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                        </svg>
                    </div>
                </div>
                <reservationBtnVue >
                    <button @click="submit.prevent" style="display: none">
                    </button>
                </reservationBtnVue>
            </form>
        </section>
        <div class="reservation-footer">
            <p>Report this listing</p>
        </div>
    </main>
</template>


<script>
import reservationBtnVue from './reservationBtn.vue'




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

    },
    methods: {
    },
    components: { reservationBtnVue }


}
</script>
