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




    <main @click="() => {
        showModal = false
        openDatesModal = false
    }">
        <section @click.stop class="order-container">

            <div class="order-form-header">
                <p><span class="cost">$ {{ stay.price }}</span> / night</p>
                <div class="flex">
                    <img src="/src/assets/pngs/star.png"
                        style="margin-inline-end: 7px;margin-block-start: 5px;height: 15px;">
                    <p>4.38 </p>

                </div>
            </div>







            <form class="reservation-form">
                <div class="order-data">
                    <div class="date-picker" @click.stop="() => {
                        this.openDatesModal = true
                        this.showModal = false
                    }">
                        <div class="date-input">
                            <label class="fs10" style="color: black; ">CHECK IN</label>
                            <DatePickerModalVue @click.stop v-if="openDatesModal" style="translate: -212px; z-index: 1 ;"
                                @passDateData="getDateData($event)" v-click-outside="onClickedOutside" />
                            <input v-model="orderInfo.startDate" placeholder="Add date">
                        </div>
                        <div class="date-input">
                            <label class="fs10" style="color: black;">CHECK OUT</label>
                            <input v-model="orderInfo.endDate" placeholder="Add date">
                        </div>
                    </div>

                    <div class="guest-input" @click="() => { showModal = true, onClickedOutside() }">
                        <label>GUESTS</label>
                        <input v-model="guestsDisplay">
                        <input type="text">
                        <svg v-if="!showModal" viewBox="0 0 320 512" width="100" title="angle-down">
                            <path
                                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                        </svg>
                        <svg v-else style="height: 8px;" xmlns="http://www.w3.org/2000/svg"
                            shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                            image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                            viewBox="0 0 512 346.35">
                            <path fill-rule="nonzero"
                                d="M410.1 346.35 256 201.69 101.9 346.35 0 240.31 256 0l256 240.31z" />
                        </svg>
                    </div>
                </div>





                <div class="order-data1">
                    <span v-if="duration">
                        <div>
                            <div class="flex space-between">
                                <div>{{ `$${stay.price} x ${duration} nights` }}</div>
                                <span>{{ `$ ${stay.price * duration}` }}</span>
                            </div>
                            <div class="flex space-between">
                                <div>{{ `Cleaning fee` }}</div>
                                <span>{{ `$ ${fee}` }}</span>
                            </div>
                        </div>
                    </span>

                    <GuestsModal v-if="showModal" @setChildrenCount="setChildrenCount($event)"
                        @setAdultCount="setAdultCount1($event)" @setInfantsCount="setInfantsCount($event)"
                        @setPetsCount="setPetsCount($event)" />

                    <div v-if="duration" class="flex space-between"
                        style="padding-block: 19px; border-block-start: 1px solid #dddd;">

                        <h4 style="color: black;">Total</h4>
                        <span>{{ `$ ${(stay.price * duration) + fee}` }}</span>
                    </div>
                </div>


                <reservationBtnVue :class="{ 'disabled': openDatesModal }" @click="() => {
                    setOrder()
                    this.$router.push(`/stay/confirm`);
                }">
                    <button @click="submit.prevent" style="display: none">
                    </button>
                </reservationBtnVue>
            </form>

            <div class="reservation-footer">
            </div>
        </section>
    </main>
</template>


<script>
import reservationBtnVue from './ReservationBtn.vue'
import GuestsModal from '../cmps/GuestsModal.vue'
import { eventBus } from '../services/event-bus.service.js'
import DatePickerModalVue from './DatePickerModal.vue'
import vClickOutside from 'click-outside-vue3'

export default {
    props: {
        stay: {
            type: Object,
        },
    },
    data() {
        return {
            fee: 125,
            openDatesModal: false,
            showModal: false,

            orderInfo: {
                totalPrice: 1190,
                startDate: "2025/10/17",
                endDate: "2025/10/17",
                guests: {

                    adults: 1,
                    kids: null,
                    infants: null,
                    pets: null

                },
            },




        }



    },
    watch: {

    },

    computed: {
        // startDateDisplay() {
        //     return this.startDate//.toLocaleDateString('en-US')
        // },
        // endDateDisplay() {
        //     return this.endDate//.toLocaleDateString('en-US')
        // },
        duration() {
            const start = new Date(this.orderInfo.startDate)
            const end = new Date(this.orderInfo.endDate)
            const diff = Math.abs(end - start)
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
            console.log('days :>> ', days);
            return days
        }, guestsNum() {
            return +this.orderInfo.guests.adults + this.orderInfo.guests.kids
        },
        guestsDisplay() {
            let adults
            let kids
            let guests
            let infants
            let totalGuests
            let pets
            adults = +this.orderInfo.guests.adults
            kids = +this.orderInfo.guests.kids
            guests = (+adults + +kids) > 1 ? `${adults + kids} guests` : '1 guest'
            infants = +this.orderInfo.guests.infants > 0 ? `${this.orderInfo.guests.infants} infants` : ' '
            pets = +this.orderInfo.guests.pets > 0 ? `${this.orderInfo.guests.pets} pets` : ' '
            totalGuests = `${guests} ${infants} ${pets}`

            // console.log('totalGuests :>> ', totalGuests);
            return totalGuests
        }
    },
    created() {
        const { startDate, endDate, adults, kids, infants, pets } = this.$route.query
        eventBus.on('closeModal', () => this.showModal = false)

        this.orderInfo.startDate = startDate
        this.orderInfo.endDate = endDate
        this.orderInfo.guests.adults = +adults ? +adults : 1
        this.orderInfo.guests.kids = +kids ? +kids : 0
        this.orderInfo.guests.infants = +infants ? +infants : 0
        this.orderInfo.guests.pets = +pets ? +pets : 0
        // console.log('this.$route.query :>> ', this.$route.query);
        // console.log('startDate, endDate, adults, kids, infants, pets :>> ', startDate, endDate, adults, kids, infants, pets);
    },

    methods: {
        setOrder() {
            console.log('orderInfo :>> ', this.orderInfo);
            this.$emit("setOrder", this.orderInfo);
        },
        closeDates() {
            this.openDatesModal = false


        },

        setAdultCount1({ adultCount }) {
            this.orderInfo.guests.adults = +adultCount

        },
        setChildrenCount({ childrenCount }) {
            this.orderInfo.guests.kids = childrenCount

        },
        setInfantsCount({ infantsCount }) {
            this.orderInfo.guests.infants = infantsCount

        },
        setPetsCount({ petsCount }) {
            this.orderInfo.guests.pets = petsCount
        }, onClickedOutside() {
            this.openDatesModal = false
        },
        getDateData({ start, end }) {
            this.orderInfo.startDate = start
            this.orderInfo.endDate = end
        }
    },
    components: { GuestsModal, reservationBtnVue, DatePickerModalVue }


}

</script>
