<template>
    <section class="details-layout">
        <div class="confirmation">
            <h1 style="font-size: 40px; margin-bottom: 50px;">confirmation</h1>
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
                    <h4 style="padding-block-start: 10px ;translate: -10px -37px;">Kevins place is usually booked </h4>
                </div>
                <div style="padding-block-end: 10px;">
                    <h2 style="padding-block:40px ;padding-block-end: 26px;">Your trip</h2>
                    <div class="flex space-between">

                        <h3>Dates</h3>
                        <h3 style="padding-inline-end: 91px">Dec 27 - 29</h3>
                    </div>
                    <div style="margin-top: 30px;" class="flex space-between">

                        <h3>Guests</h3>
                        <h3 style="padding-inline-end: 91px">2 guests</h3>
                    </div>
                    <div class="aprove">
                    </div>
                </div>

                <div class="flex">
                    <p style="    font-size: 22px;translate: 67px 122px;">close</p>
                    <div @click="this.$router.push(`/trip`);" class=" approveBtn">
                        <span style="padding-inline-start: 41px;">
                            Approve
                        </span>

                    </div>

                </div>



            </div>


            <div class="confirm-price-modal flex-col">
                <div class="apt-modal">
                    <div class="flex confirm-modal-top">
                        <img class="confirmation-img" src="../assets/img/1.jpg">
                        <div>
                            <p style="margin-block-start: 33px;margin-inline-start: 23px;" class="fs14">Apartment</p>
                            <div class="confirm-h4">
                                <h4>Home,Sweet,Harlem</h4>
                                <h4 style="margin-block-start: -6px;">Welcome</h4>
                            </div>
                        </div>
                    </div>
                    <div class="confrim-price-details">
                        <h3 style="margin-block-start: 26px;margin-inline-start: 30px;">Price details</h3>
                        <div style="margin-inline: 30px; margin-block-start: 40px;" class="flex space-between">
                            <h4>$110 X 2 nights </h4>
                            <h4>$220</h4>
                        </div>
                        <div style="padding-block-end: 21px;margin-inline: 30px; margin-block-start: 17px;border-bottom: 1px solid #ddd;"
                            class="flex space-between">
                            <h4>Service fee </h4>
                            <h4>$24</h4>
                        </div>
                        <div style="margin-inline: 30px; margin-block-start: 35px;" class="flex space-between">
                            <h4>Total </h4>
                            <h4>$244</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>





<script>
// import {userService} from '../services/user.service'

export default {
    data() {
        return {
            // user: null
        }
    },
    async created() {
        // const user = await userService.getById(id)
        // this.user = user
    },
    watch: {

    },
    computed: {

    },
}
</script>