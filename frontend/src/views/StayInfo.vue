<template>
    <section class="stay-info flex-col">
        <div class="host-info flex">
            <div>
                <h2>{{ stay.type }} hosted by {{ stay.host.fullname }} </h2>
                <ul style="margin-block-start: -13px;" class="stay-baths-beds flex">
                    <div>{{ stay.capacity }} guests</div><span class="dot">·</span>
                    <div>{{ stay.capacity }} beds</div><span class="dot">·</span>
                    <div>3 baths</div>
                </ul>
            </div><img class="mini-host-img" :src="stay.host.pictureUrl">
        </div>
        <ul class="stay-main-amenities-list">
            <li class="flex">
                <div class="flex">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                        <path
                            d="m26.6667.33325c2.7614237 0 5 2.23857625 5 5 0 1.31252243-.5057306 2.50692514-1.3329579 3.39897419l-.0003421 12.60097581-.0046196.2168878c-.110409 2.5868723-2.1864153 4.6647895-4.7725007 4.7782333l-.2228797.0048789-5.37965-.0007-3.95365 4.5193-3.95535-4.5193-5.378.0007-.21689009-.0046196c-2.58889537-.1104942-4.66799759-2.1896227-4.77849041-4.7784926l-.0046195-.2168878v-14.6667h2v14.6667l.00509267.1762674c.08786657 1.5164377 1.30214832 2.7307694 2.81863397 2.8186397l.17627336.0050929h6.28715l3.04585 3.4813 3.04665-3.4813h6.287c1.597725 0 2.903664-1.2489704 2.9949075-2.8237326l.0050925-.1762674-.0001078-11.2844332c-.5212771.1842357-1.0822276.2844832-1.6665922.2844832-2.7614237 0-5-2.23857625-5-5 0-.58436456.1002475-1.14531506.2844832-1.66659223l-15.2844332-.00015777-.17627336.00509271c-1.51648565.0878672-2.7307674 1.30215727-2.81863397 2.81863493l-.00509267.17502236-2 .00025.00461952-.21588934c.11040804-2.58688927 2.18639693-4.66478903 4.77249926-4.77823185l.22288122-.00487881 16.6009758-.0002921c.8920491-.82722728 2.0864518-1.3329579 3.3989742-1.3329579zm-1.1919682 2.24613101-.1437145.0668777-.062205.03189443-.162945.09259813-.1458283.0949218-.1106469.0804555-.1289779.10407113-.155155.14203386-.1448697.1524757-.1136922.13620282-.045604.05953215c-.3733536.50015804-.5943933 1.1206686-.5943933 1.79280577 0 1.65685425 1.3431458 3 3 3 .6245598 0 1.2045431-.19085456 1.6848096-.51742339l.1728464-.12676345.1564144-.13238455.1843168-.1820638.1005471-.11384792.1530375-.19855208.0480886-.0701581.0627236-.0984415.0650185-.1119245.0607666-.11593066.1075518-.24322537c.0352657-.09045929.0662674-.18304718.0927593-.27751925l.0437598-.17664562.032631-.17718882c.014177-.09256085.0241236-.18651477.0296363-.2816582l.0050927-.17627279c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269-.1782955.00521057-.1957301.01787825-.0769938.01058982-.1930831.03563199-.1709809.04274164-.0945661.0283372-.0929723.03124429-.0955519.03572841z">
                        </path>
                    </svg>
                    <div>
                        <h3 class="fs18" style="margin-inline-start: 16px;">Great communication</h3>
                        <p class=" fs14" style=" margin-inline-start: 16px;">100% of recent guests rated Maria 5-star in
                            communication..</p>
                    </div>
                </div>
            </li>
            <li class="flex">
                <div class="flex">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                        <path
                            d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z">
                        </path>
                    </svg>
                    <div>
                        <h3 style="margin-inline-start: 16px;" class="fs18">{{ stay.host.fullname }} is a Superhost</h3>
                        <p style=" margin-inline-start: 16px;" class="fs14">This Host committed to Airbnb's 5-step enhanced
                            cleaning process.</p>
                    </div>
                </div>
            </li>
            <li class="flex">
                <div style="padding-block-end: 10px; " class="flex">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                        <path
                            d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z">
                        </path>
                    </svg>
                    <div>
                        <h3 style="margin-inline-start: 16px;" class="fs18"> Self check-in</h3>
                        <p style=" margin-inline-start: 16px;" class="fs14">Check yourself in with the lockbox.</p>
                    </div>
                </div>
            </li>
        </ul>
        <p style="display: inline-block;" class="stay-summery fs16">{{ stay.summary }}</p>
        <AirCover />
    </section>
</template>


<script>
import AirCover from '../cmps/AirCover.vue'
import reservation from '../cmps/reservation.vue'



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
        // console.log('stay :>> ', this.stay);
    },
    methods: {
    }, components: {
        reservation, AirCover


    },
}
</script>





