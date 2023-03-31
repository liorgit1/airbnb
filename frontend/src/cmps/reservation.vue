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
                            <label>CHECK IN</label>
                            <DatePickerModalVue @click.stop v-if="openDatesModal" style="translate: -212px; z-index: 1 ;"
                                @passDateData="getDateData($event)" v-click-outside="onClickedOutside" />
                            <input v-model="startDate">
                        </div>
                        <div class="date-input">
                            <label>CHECK OUT</label>
                            <input v-model="endDate">
                        </div>
                    </div>

                    <div class="guest-input" @click="() => { showModal = true, onClickedOutside() }">
                        <label>GUESTS</label>
                        <input v-model="guestsDisplay">
                        <input type="text">
                        <svg viewBox="0 0 320 512" width="100" title="angle-down">
                            <path
                                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                        </svg>
                    </div>
                </div>

                <div v-if="duration">
                    <span>
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
                    <div v-if="duration" class="flex space-between"
                        style="padding-block: 19px; border-block-start: 1px solid #dddd;">

                        <h4 style="color: black;">Total</h4>
                        <span>{{ `$ ${(stay.price * duration) + fee}` }}</span>
                    </div>
                </div>

                <reservationBtnVue @click="this.$router.push(`/stay/confirm`);">
                    <button @click="submit.prevent" style="display: none">
                    </button>
                </reservationBtnVue>
            </form>
            <GuestsModal @setChildrenCount="setChildrenCount($event)" @setAdultCount="setAdultCount1($event)"
                @setInfantsCount="setInfantsCount($event)" @setPetsCount="setPetsCount($event)" v-if="showModal" />
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
            totalPrice: 1190,
            startDate: "2025/10/17",
            endDate: "2025/10/17",
            guests: {

                adults: null,
                kids: null,
                infants: null,
                pets: null

            },

        }



    },
    watch: {
        duration: {
            handler() {
                console.log('duration :>> ', this.duration);
            },
        },
        guestsNum: {
            handler() {
                console.log('guestsNum :>> ', this.guestsNum);
            },
        },
    },

    computed: {
        // startDateDisplay() {
        //     return this.startDate//.toLocaleDateString('en-US')
        // },
        // endDateDisplay() {
        //     return this.endDate//.toLocaleDateString('en-US')
        // },
        duration() {
            const start = new Date(this.startDate)
            const end = new Date(this.endDate)
            const diff = Math.abs(end - start)
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
            console.log('days :>> ', days);
            return days
        }, guestsNum() {
            return +this.guests.adults + this.guests.kids
        },
        guestsDisplay() {
            let adults
            let kids
            let guests
            let infants
            let totalGuests
            let pets
            adults = this.guests.adults
            kids = this.guests.kids
            guests = adults + kids > 0 ? `${adults + kids} guests` : ' '
            infants = this.guests.infants > 0 ? `${this.guests.infants} infants` : ' '
            pets = this.guests.pets > 0 ? `${this.guests.pets} pets` : ' '
            totalGuests = `${guests} ${infants} ${pets}`
            console.log('totalGuests :>> ', totalGuests);
            return totalGuests
        }
    },
    created() {
        const { startDate, endDate, adults, kids, infants, pets } = this.$route.query
        eventBus.on('closeModal', () => this.showModal = false)

        this.startDate = startDate
        this.endDate = endDate
        this.guests.adults = +adults
        this.guests.kids = +kids
        this.guests.infants = +infants
        this.guests.pets = +pets
        console.log('this.$route.query :>> ', this.$route.query);
        console.log('startDate, endDate, adults, kids, infants, pets :>> ', startDate, endDate, adults, kids, infants, pets);
    },

    methods: {
        closeDates() {
            this.openDatesModal = false

            console.log('123123');
            console.log('openDatesModal', this.openDatesModal);
        },

        setAdultCount1({ adultCount }) {
            this.guests.adults = adultCount
            console.log('this.guests.adult2111 :>> ', this.guests.adults);
        },
        setChildrenCount({ childrenCount }) {
            this.guests.kids = childrenCount
            console.log('this.guests.kids :>> ', this.guests.kids);
        },
        setInfantsCount({ infantsCount }) {
            this.guests.infants = infantsCount
            console.log('this.guests.infants :>> ', this.guests.infants);
        },
        setPetsCount({ petsCount }) {
            this.guests.pets = petsCount
            console.log('this.guests.pets :>> ', this.guests.pets);
        }, onClickedOutside() {
            this.openDatesModal = false
        },
        getDateData({ start, end }) {
            this.startDate = start
            this.endDate = end
        }
    },
    components: { GuestsModal, reservationBtnVue, DatePickerModalVue }


}

</script>
