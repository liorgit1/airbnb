<template>
    <section>
        <!-- <AppHeader
      @openModalLogin="openModalLogin"
    /> -->
        <!-- <detailsMap :stay="stay"></detailsMap> -->
    </section>
    <img-carousel indicator-position="" :imgs="stay.imgUrls" class="card-img full" />
    <section @click="closeModal()" v-if="stay" class="stay-details details-layout">

        <!-- header-details -->



        <!-- <section> -->
        <div class="gc23" style="height: 76px;">

            <h1> {{ stay.name }}</h1>
            <div class="likeAndShare space">
                <span class="flex" style="margin-inline-end: auto;">

                    <img style="padding-block: 6px; padding-inline-end: 9px ;width: 22px;"
                        src="../assets/pngs/star.png"><span style="font-size: 15px;">{{ ` ${totalRate} · ` }}</span>
                    <p class="placeLink fs16"> {{ ` ${stay.reviews.length} reviews · ` }}</p>
                    <p class="placeLink fs16">{{ `${stay.loc.city} , ${stay.loc.country} ` }}</p>
                </span>
                <span class="fs16">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false"
                        style="translate: 0px 2px;fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;">
                        <g fill="none">
                            <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                            <path d="M16 3v23V3z"></path>
                            <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                        </g>
                    </svg>
                    <a style="text-decoration: underline;">Share</a>
                </span>
                <span class="fs16">
                    <a style="text-decoration: underline;"> <img style="translate: 0px 3px; width:16px ; "
                            src="../assets/pngs/heart.png">
                        Save</a>
                </span>
            </div>
        </div>
        <div class="detailsImgContainer">
            <img v-for="(url, index) in stay.imgUrls.slice(0, 5)" :key="index" :src="url || stay.imgUrls[0]"
                :class="'img img' + (index + 1)">

            <!-- <img :src="stay.imgUrls[0]" class="img img1">
            <img :src="stay.imgUrls[1] || stay.imgUrls[0]" class="img img2">
            <img :src="stay.imgUrls[2] || stay.imgUrls[0]" class="img img3">
            <img :src="stay.imgUrls[3] || stay.imgUrls[0]" class="img img4">
            <img :src="stay.imgUrls[4] || stay.imgUrls[0]" class="img img5"> -->
        </div>
        <section class="info-container">
            <!-- <div>   -->
            <Reservation @click.stop :stay="stay" @setOrder="setOrder" />
            <!-- </div> -->
            <div class="flex-col">
                <StayInfo :stay="stay" />
                <StayAmenities :stay="stay" />
            </div>
        </section>
        <detailsMap v-if="stay.loc.lat && stay.loc.lan" :stay="stay"></detailsMap>
        <StayReviews :stay="stay" @setTotalRate="setTotalRate($event)" />

        <!-- </section> -->

        <!-- <pre>{{ stay }}</pre> -->


    </section>
</template>


<script>
// import { stayService } from '../services/stay.service.local'
import GuestsModal from '../cmps/GuestsModal.vue'
import Reservation from '../cmps/reservation.vue'
import StayInfo from './StayInfo.vue'
import StayAmenities from '../cmps/StayAmenities.vue'
import StayReviews from '../cmps/StayReviews.vue'
import detailsMap from '../cmps/details-map.vue'
import AppHeader from '../cmps/AppHeader.vue'

import { orderService } from "../services/order-service.js"
import { eventBus } from '../services/event-bus.service.js'
import { stayService } from '../services/stay-service.js'
import imgCarousel from '../cmps/img-carousel.vue'
import DatePickerModal from '../cmps/DatePickerModal.vue'

export default {

    data() {
        return {

            totalRate: null,
            stay: null

        }
    },
    computed: {

    },
    async created() {
        // this.$store.dispatch({ type: 'loadStays' })

        const { id } = this.$route.params
        // console.log('this.$route.params :>> ', this.$route.params);

        if (id) {
            const stay = await stayService.getById(id)
            this.stay = stay
        }
    },
    methods: {
        setTotalRate({ totalRate }) {
            this.totalRate = totalRate
        },
        closeModal() {
            eventBus.emit('closeModal')

        }, async setOrder(orderInfo) {
            const order = orderService.getEmptyOrder();
            order.name = this.stay.name;
            order.country = this.stay.loc.country;
            order.stay_id = this.stay._id;
            order.hostId = this.stay.host._id;
            order.pricePerNight = this.stay.price;
            order.guests = orderInfo.guests;
            order.startDate = orderInfo.startDate;
            order.endDate = orderInfo.endDate;
            const totalPrice = orderService.getTotalPrice(order);
            order.totalPrice = totalPrice;
            const stayTime = orderService.getStayTime(order);
            order.stayTime = stayTime;
            // console.log(" totalPrice",  totalPrice);
            // console.log(" order.total",  order.total);

            const orderToSave = JSON.parse(JSON.stringify(order));
            if (!await order.totalPrice) {
                // console.log('no stay time stydetails134');
                return;
            }
            this.$store.commit({ type: "setCurrOrder", newOrder: order });

            try {
                // console.log("orderToSave", orderToSave);
                const newOrder = await this.$store.dispatch({
                    type: "addNewOrder",
                    orderToSave,
                });

                ElNotification({
                    title: "Success",
                    message:
                        "Your booking request has been sent to the host",
                    type: "success",
                });

                //     // socketService.emit("addOrder", orderToSave);
            } catch {
                console.error;
            }
        },



    },
    components: {
        imgCarousel,
        Reservation,
        StayInfo,
        StayAmenities,
        GuestsModal,
        StayReviews,
        AppHeader,
        detailsMap,
        DatePickerModal,
    }
    , computed: {


        // stay() {
        //     return this.$store.getters.stays[0]
        // }
    },


}
</script>