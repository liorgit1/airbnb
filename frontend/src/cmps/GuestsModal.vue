<template>
    <section @click.stop class=" guest-modal">
        <div class="flex adult-count space-between">
            <div class="description">
                <div class="title fs16">Adults</div>
                <div class="subtitle fs14">Ages 13 +</div>
            </div>
        </div>
        <div class="flex space-between counter">

            <div @click="decAdultCount" class="roundBtn">-</div>
            <span>{{ adultCount }}</span>

            <div @click="incAdultCount" class="roundBtn">+</div>
        </div>

        <div style="align-self: start;" class="flex children-count space-between">
            <div class="description">
                <div class="title fs16">Children</div>
                <div class="subtitle fs14">Ages 2-12</div>
            </div>
        </div>

        <div class="flex space-between counter">

            <div @click="decChildrenCount" class="roundBtn">-</div>
            <span>{{ childrenCount }}</span>

            <div @click="incChildrenCount" class="roundBtn">+</div>
        </div>

        <div style="align-self: start;" class="flex Infants-count space-between">
            <div class="description">
                <div class="title fs16">Infants</div>
                <div class="subtitle fs12">Under 2</div>
            </div>
        </div>
        <div class="flex space-between counter">

            <div @click="decInfantsCount" class="roundBtn">-</div>
            <span>{{ infantsCount }}</span>

            <div @click="incInfantsCount" class="roundBtn">+</div>
        </div>

        <div class="flex space-between pets-count">
            <div class="description">
                <div class="title fs16">Pets</div>
                <span class="subtitle fs14"><a class="fs12">Bringing a service animal?</a></span>
            </div>
        </div>
        <div class="flex space-between counter">

            <div @click="decPetsCount" class="roundBtn">-</div>
            <span>{{ petsCount }}</span>

            <div @click="incPetsCount" class="roundBtn">+</div>
        </div>
        <div style="grid-column: 1/-1;">
            <p style="margin: 0px;margin-block-start: 13px;" class=" fs12">This place has a maximum of 4 guests, not
                including infants. If you're
                bringing more than 2
                pets, please let
                your host know.</p>
        </div>
        <!-- <p>{{ guestsNum }}</p> -->
    </section>
</template>
<script>





export default {
    props: {

    },
    data() {
        return {
            adultCount: 1,
            childrenCount: 0,
            infantsCount: 0,
            petsCount: 0,
        }
    },
    computed: {
        guestsNum() {
            return this.adultCount + this.childrenCount + this.infantsCount
        }
    },
    created() {
        this.setGuestsNum()
    },
    methods: {
        incAdultCount() {
            this.adultCount++
            this.$emit('setAdultCount', { adultCount: this.adultCount })
            this.setGuestsNum()
        },
        decAdultCount() {
            if (this.adultCount > 0) this.adultCount--
            this.setGuestsNum()
        },
        incChildrenCount() {
            this.childrenCount++
            this.setGuestsNum()
        },
        decChildrenCount() {
            if (this.childrenCount > 0) this.childrenCount--
            this.setGuestsNum()
        },
        incInfantsCount() {
            this.infantsCount++
            this.setGuestsNum()
        },
        decInfantsCount() {
            if (this.infantsCount > 0) this.infantsCount--
            this.setGuestsNum()
        },
        incPetsCount() {
            this.petsCount++
            this.setGuestsNum()
        },
        decPetsCount() {
            if (this.petsCount > 0) this.petsCount--
            this.setGuestsNum()
        },
        setGuestsNum() {
            this.$store.commit({
                type: 'setGuestsNum', guestsNum: this.guestsNum
            })
        },
    }, emits: ['setAdultCount'],
    components: {}


}
</script>
