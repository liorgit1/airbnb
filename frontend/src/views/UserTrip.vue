<template>
    <app-header></app-header>
    <section style="margin-bottom: 80px;">
<div class="alert" style="display: none;">
</div>
<section class="main-layout" style="margin-top: 100px;">
    <h1 class="trips">Trips</h1>
    <section class="user-trips">
    <div class="mini-card-grid mini-card grid-item-2">
      <div class="mini-card-header flex row wrap">
        <h1>Wishlist</h1>
        </div>
        <h4><span>0</span>&nbsp;saved stays</h4>
        <button class="mini-card-btn">Go to wishlist</button>
    </div>
    <div class="mini-card-grid mini-card grid-item-3">
    <div class="mini-card-header">
        <h1>Messages</h1>
        <h4> order #o113 has been approved</h4>
        <button class="mini-card-btn">Go to messages</button>
    </div>
    </div>
    <div class="mini-card next-stay flex row space-between grid-item-1">
        <div class="next-stay-first flex row wrap">
            <div class="mini-card-header flex wrap">
                <h1 class="">Your Next Stay</h1>
            </div>
            <h4>Beautiful pool and house hosted by Jacky</h4>
            <button class="mini-card-btn">Go to stay</button>
        </div>
        <div class="next-stay-img">
            <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg" alt="">
        </div>
    </div>
    <section class="old-trips grid-item-4">
        <h2>Where have you been</h2>
        <ul class="mini-stays flex row">
            <li class="mini-stay flex row nowrap">
                <div class="mini-stay-img">
                    <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436496/ihozxprafjzuhil9qhh4.jpg" alt="">
                </div>
                <div class="mini-stay-desc flex row wrap">
                    <h1>{{ stay.loc.city }}</h1>
                    <h4>hosted by {{stay.host.Fullname}}</h4>
                    <h4>Nov 12-19, 2020</h4>
                </div>
            </li>
            <li class="mini-stay flex row nowrap">
                <div class="mini-stay-img">
                    <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg" alt="">
                </div>
                <div class="mini-stay-desc flex row wrap">
                    <h1>Boston</h1>
                    <h4>Hosted by David</h4>
                    <h4>June 08-20, 2022</h4>
                </div>
            </li>
            <li class="mini-stay flex row nowrap">
                <div class="mini-stay-img">
                    <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436867/yocip4igdbruuh2grzpf.jpg" alt="">
                </div>
                <div class="mini-stay-desc flex row wrap">
                    <h1>Berlin</h1>
                    <h4>Hosted by Rachel</h4>
                    <h4>Jan 1-5, 2013</h4>
                </div>
            </li>
            <li class="mini-stay flex row nowrap">
                <div class="mini-stay-img">
                    <img src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg" alt="">
                </div>
                <div class="mini-stay-desc flex row wrap">
                    <h1>Bagdad</h1>
                    <h4>Hosted by Shula</h4>
                    <h4>Aug 07-10, 2020</h4>
                </div>
            </li>
        </ul>
    </section>
</section>
</section>
</section>

</template>

<script>

export default {
    computed: {
    stay() {
      return this.$store.getters.stays[4]
    },
  },
  created(){
    this.$store.dispatch({ type: 'loadStays' })
  },
  mounted() {
        console.log(this.stay);
    // this.stay = stay
  },  

    data() {
        return {
        //     // stay:null
        }
    }
}
</script>