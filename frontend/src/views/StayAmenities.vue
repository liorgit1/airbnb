<template>
    <section class="stay-amenities">
        <h1>What this place offers</h1>
        <div class="stay-amenities-container">
            <div style="display: flex; gap: 13px" v-for="amenitie in stay.amenities" :key="amenitie">
                <img style="width: 1.2em" :src="`../../../../src/assets/pngs/amenities/${amenitie.toLowerCase()}.svg`">

                <p style="margin: 0;font-size: 14px;padding-block-start: 10px;">{{ amenitie }}</p>
            </div>




            <!-- <div style="display: flex; gap: 13px"><img src="https://air-bxb.onrender.com/assets/tv.39c759e9.svg"
                    style="width: 1.2em;">
                <p>TV</p>
            </div> -->



            <!-- <div style="display: flex; gap: 13px;"><img src="https://air-bxb.onrender.com/assets/air.498c5990.svg"
                    style="width: 1.2em;">
                <p>Air conditioning</p>
            </div>
            <div style="display: flex; gap: 13px;"><img src="https://air-bxb.onrender.com/assets/dryer.38268a76.svg"
                    style="width: 1.2em;">
                <p>Dryer</p>
            </div>
            <div style="display: flex; gap: 13px;"><img src="https://air-bxb.onrender.com/assets/garden.3026595d.svg"
                    style="width: 1.2em;">
                <p>Garden view</p>
            </div>
            <div style="display: flex; gap: 13px;"><img src="https://air-bxb.onrender.com/assets/carbon.85b10b40.svg"
                    style="width: 1.2em;">
                <p>Carbon monoxide detector</p>
            </div>
            <div style="display: flex; gap: 13px;"><img src="https://air-bxb.onrender.com/assets/dedicated.66bd7c7c.svg"
                    style="width: 1.2em;">
                <p>Dedicated workspace</p>
            </div>
            <div style="display: flex; gap: 13px;"><img src="https://air-bxb.onrender.com/assets/kitchen.1965d340.svg"
                    style="width: 1.2em;">
                <p>Kitchen</p>
            </div>
            <div style="display: flex; gap: 13px;"><img src="https://air-bxb.onrender.com/assets/free.bbed5c37.svg"
                    style="width: 1.2em;">
                <p>Free parking on premises</p>
            </div> -->
        </div>
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
        console.log('stay :>> ', this.stay);
    },
    methods: {



    },
}
</script>





