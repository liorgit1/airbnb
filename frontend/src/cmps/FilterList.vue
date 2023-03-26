<template>
    <section v-if = "!isOpen" class="Filter-list card-carousel-wrapper slick-slider slick-list ">
    <button class="card-carousel--nav__left"  @click="moveCarousel(-1)"
             :disabled="atHeadOfList">
     
    </button>

    <div class="card-carousel card-carousel--overflow-container">
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
    </div>
    <button class="card-carousel--nav__right"  @click="moveCarousel(+1)"
             :disabled="atHeadOfList">
    </button>
</section>
</template>

<script>

export default{
    props: ['isOpen'],
    
    data(){ return {
        currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
    }
},
    computed:{
        atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
    },
    
    methods:{

        moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    }
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