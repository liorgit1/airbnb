<template>
    <section class="reservationModal">
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
        <div class="checkBtn"><span>Check availability</span></div>

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

    },
    methods: {
    }


}
</script>
