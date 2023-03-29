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
                <p><span class="cost">{{ stay.price }}</span> / night</p>
                <p>4.38 <span class="reviews">(4 reviews)</span></p>
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
                                @close="closeDates" @passDateData="getDateData($event)"
                                v-click-outside="onClickedOutside" />
                            <input v-model="startDateDisplay">
                        </div>
                        <div class="date-input">
                            <label>CHECK OUT</label>
                            <input v-model="endDateDisplay">
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
                <reservationBtnVue>
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
            openDatesModal: false,
            showModal: false,
            totalPrice: 1190,
            startDate: "2025/10/17",
            endDate: "2025/10/17",
            guests: {
                adults: 0,
                kids: 0,
                infants: 0,
                pets: 0
            },

        }



    },
    watch: {
        openDatesModal: {
            handler() {
                console.log('openDatesModal :>> ', this.openDatesModal);
            },
        },
    },

    computed: {
        startDateDisplay() {
            return this.startDate//.toLocaleDateString('en-US')
        },
        endDateDisplay() {
            return this.endDate//.toLocaleDateString('en-US')
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

        eventBus.on('closeModal', () => this.showModal = false)
        // eventBus.on('close', () => this.openDatesModal = false)
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
