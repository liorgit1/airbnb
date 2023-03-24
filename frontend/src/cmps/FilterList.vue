<template>
    <section v-if = "!isOpen" class="Filter-list slick-slider ">
    <button class="list-btn">
        <img src="../assets/pngs/icon2.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon3.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon1.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon4.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon5.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon6.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon7.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon8.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon9.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon10.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon11.jpg">
    </button>
</section>
</template>

<script>

export default{
    props: ['isOpen'],
    
    methods:{
//         $(document).ready(function() {

//     $('.responsive').slick({
//     // dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 1024,
//         settings: {
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             // centerMode: true,

//         }

//     }, {
//         breakpoint: 800,
//         settings: {
//             slidesToShow: 3,
//             slidesToScroll: 2,
//             dots: true,
//             infinite: true,

//         }


//     }, {
//         breakpoint: 600,
//         settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             dots: true,
//             infinite: true,
            
//         }
//     }, {
//         breakpoint: 480,
//         settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//             infinite: true,
//             autoplay: true,
//             autoplaySpeed: 2000,
//         }
//     }]
// });


// })
    }
}
</script>