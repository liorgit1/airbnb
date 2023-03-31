<!-- <template>
<section class="Filter-list main-layout">
    <div filter-container v-for="key in keys" :key = "key.url" >
    <img class="icon" :src="key.url" style="width:30px"/>
    <h1>{{ key.key }}</h1>
    </div>
  
</section>
</template>
class="main-layout"  -->
 <template>
 <Carousel :value="keys" :numVisible="11" :numScroll="3" :responsiveOptions="responsiveOptions" class="main-layout">
    <template #item="slotProps" class="Filter-list">
        <div @click="slotProps.data.keyClicked = true" class="filter-container" :class="{'filter-container-clicked':slotProps.data.keyClicked }">
            <img :src="slotProps.data.url" />
            <h1>{{ slotProps.data.key }}</h1>
        </div>     
    </template>
</Carousel> 
</template>

<!-- <template>
    <ssr-carousel>
        <div filter-container v-for="key in keys" :key = "key.url" >
    <img class="icon" :src="key.url" style="width:30px"/>
    <h1>{{ key.key }}</h1>
    </div>
    </ssr-carousel>
</template> -->

<!-- <template>
    <div>
      <VueSlickCarousel  >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VueSlickCarousel>
    </div>
  </template> -->

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
//  import VueSlickCarousel from 'vue-slick-carousel'
//  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
//  import slick from 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'

import Carousel from 'primevue/carousel';

import SsrCarousel from "vue-ssr-carousel";
import "vue-ssr-carousel/index.css";

export default{

    components:{Carousel , VueSlickCarousel},
    
    props: {

    isOpen: {
      type: Boolean,
    }
},

    //    components:{ slick },

    data() {
        return {

            isClicked : false,

            props: {
                isOpen: {
                    type: Boolean,
                },
            },

        
        keys:[
        {
            key: 'Trending',
            url: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
            keyClicked:false
        },
        {
            key: 'Adapted',
            url: 'https://a0.muscache.com/pictures/e22b0816-f0f3-42a0-a5db-e0f1fa93292b.jpg',
            keyClicked:false
        },
        {
            key: 'Tropical',
            url: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
            keyClicked:false
        },
        {
            key: 'Iconic',
            url: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
            keyClicked:false
        },
        {
            key: 'Beachfront',
            url: 'https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg',
            keyClicked:false
        },
        {
            key: 'Campers',
            url: 'https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg',
            keyClicked:false
        },
        {
            key: 'Ryokans',
            url: 'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg',
            keyClicked:false
        },
        {
            key: 'Minsus',
            url: 'https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg',
            keyClicked:false
        },
        {
            key: 'Play',
            url: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg',
            keyClicked:false
        },
        {
            key: 'Hanoks',
            url: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
            keyClicked:false
        },
        {
            key: 'Private',
            url: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
            keyClicked:false
        },
        {
            key: 'OMG!',
            url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
            keyClicked:false
        },
        {
            key: 'Skiing',
            url: 'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg',
            keyClicked:false
        },

        {
            key: 'Private',
            url: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
            keyClicked:false
        },
        {
            key: 'Off-the-grid',
            url: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg',
            keyClicked:false
        },
        {
            key: 'Luxe',
            url: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
            keyClicked:false
        },
        {
            key: 'Caves',
            url: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
            keyClicked:false
        },
        {
            key: 'Boats',
            url: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg',
            keyClicked:false
        },
        {
            key: 'Casas particulares',
            url: 'https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg',
            keyClicked:false
        },
        {
            key: 'new',
            url: 'https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg',
            keyClicked:false
        },
        {
            key: 'top',
            url: 'https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg',
            keyClicked:false
        },
        {
            key: 'Golfing',
            url: 'https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg',
            keyClicked:false
        },
        {
            key: 'Earth homes',
            url: 'https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg',
            keyClicked:false
        },
        {
            key: 'Countryside',
            url: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
            keyClicked:false
        },

        ],
        
    }
    },
    
    methods:{
        Clicked(){
            console.log('click')
        this.isClicked = true
        console.log(this.isClicked)
        }
    }
    }
    </script>
    
       
  