<template>
    <section class="details-layout">
        <div class="confirmation">
            <h1 style="font-size: 40px; margin-block: 50px;">Confirmation</h1>
        </div>
        <div class="confirmation-container ">
            <div class="your-trip flex-col">
                <div class="rare-find">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false"
                        style="translate: 352px -15px;display: block; height: 40px; width: 40px; fill: rgb(227, 28, 95); stroke: currentcolor;">
                        <g stroke="none">
                            <path d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z" fill-opacity=".2">
                            </path>
                            <path
                                d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z">
                            </path>
                        </g>
                    </svg>

                    <h1 style="translate: -10px -41px;">This is a rare find</h1>
                    <h4 style="translate: -10px -37px;">{{ this.stay.host.fullname }}'s place is usually booked
                    </h4>
                </div>
                <div style="padding-block-end: 10px;">
                    <h2 style="padding-block:40px ;padding-block-end: 26px;">Your trip</h2>
                    <div class="flex space-between">

                        <h3>Dates</h3>
                        <h3 style="padding-inline-end: 91px">{{ this.order.startDate }} - {{ this.order.endDate }}</h3>
                    </div>
                    <div style="margin-top: 30px;" class="flex space-between">

                        <h3>Guests</h3>
                        <h3 style="padding-inline-end: 91px">{{ this.order.guests.adults + this.order.guests.kids }} guests
                        </h3>
                    </div>
                    <div class="aprove">
                    </div>
                </div>

                <div class="flex">
                    <p style="font-size: 22px;translate: 67px 92px;; text-decoration: underline;">close</p>
                    <div style="cursor: pointer;" @click="makeOrder" class=" approveBtn">
                        <span style="padding-inline-start: 41px;">
                            Approve
                        </span>

                    </div>

                </div>



            </div>


            <div class="confirm-price-modal flex-col">
                <div class="apt-modal">
                    <div class="flex confirm-modal-top">
                        <img class="confirmation-img" :src="stay.imgUrls[0]">
                        <div>
                            <p style="margin-block-start: 33px;margin-inline-start: 15px;" class="fs14">{{ this.stay.type }}
                            </p>
                            <div class="confirm-h4">
                                <h4>{{ this.stay.name }}</h4>
                                <h4 style="margin-block-start: -6px;">Welcome</h4>
                            </div>
                        </div>
                    </div>
                    <div class="confrim-price-details">
                        <h3 style="margin-block-start: 26px;margin-inline-start: 30px;">Price details</h3>
                        <div style="margin-inline: 30px; margin-block-start: 40px;" class="flex space-between">
                            <h4>${{ stay.price }} X{{ order.stayTime }} nights </h4>
                            <h4>${{ order.totalPrice }}</h4>
                        </div>
                        <div style="padding-block-end: 21px;margin-inline: 30px; margin-block-start: 17px;border-bottom: 1px solid #ddd;"
                            class="flex space-between">
                            <h4>Service fee </h4>
                            <h4>${{ fee }}</h4>
                        </div>
                        <div style="margin-inline: 30px; margin-block-start: 35px;" class="flex space-between">
                            <h4>Total </h4>
                            <h4>${{ order.totalPrice + fee }}</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>





<script>
import { stayService } from '../services/stay-service';
// import {userService} from '../services/user.service'
export default {
    data() {
        return {
            order: {},
            stay: {},
            fee: 24
            // user: null
        }
    },
    async created() {
        // const user = await userService.getById(id)
        this.order = this.$store.getters.currOrder;
        const stay = await stayService.getById(this.order.stay_id)
        this.stay = stay
        // console.log('this.stay :>> ', this.stay);

        // console.log('this.order :>> ', this.order);
        // console.log('this.$store.getters.currOrder :>> ', this.$store.getters.currOrder);
    },
    methods: {
        async makeOrder() {

            // console.log('giiiiiiiiiiiiiiiiiiiiiii')
            // console.log("orderToSave", this.order)
            try {
                this.$store.dispatch({
                    type: "addNewOrder",
                    orderToSave: this.order,
                })

                this.$router.push(`/trip`)
                // ElNotification({
                //     title: "Success",
                //     message:
                //         "Your booking request has been sent to the host",
                //     type: "success",
                // });

                // socketService.emit("addOrder", orderToSave);
            }
            catch {
                console.error;
            }
        }
    },
    watch: {

    },
    computed: {

    },
}
</script>