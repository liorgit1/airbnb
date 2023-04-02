<template>
    <section>
<div class="alert" style="display: none;">
</div>
<section class="main-layout" >
    <h1 class="trips">Trips</h1>
    <section class="user-trips">
    <div class="mini-card-grid mini-card grid-item-2">
      <div class="mini-card-header flex row wrap">
        <h1>Wishlist</h1>
        </div>
        <div class="mini-stay-img">
        <img src="data:image/jpeg;base64,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">
        </div>
        <h4><span>4</span>&nbsp;saved stays</h4>
        <button class="mini-card-btn">Go to wishlist</button>
    </div>
    <div class="mini-card-grid mini-card grid-item-3" >
    <div class="mini-card-header">
        <h1>Messages</h1>
            <h4>order #o113 has been approved</h4>
            <h4>order #o114 has been approved</h4>
            <h4>order #o115 has been approved</h4>
            <h4>order #o116 has been approved</h4>
        <button class="mini-card-btn">Go to messages</button>
    </div>
    </div>
    <div class="mini-card next-stay flex row space-between grid-item-1">
        <div class="next-stay-first flex row wrap">
            <div class="mini-card-header flex wrap">
                <h1 class="">Your Next Stay</h1>
            </div>
            <h4>hosted by andy and maria</h4>
            <h4>May 23-26, 2023</h4>
            <h4>beautiul house, with</h4>
            <h4>with amazing views</h4>

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