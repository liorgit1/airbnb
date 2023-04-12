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
        <div class="mini-stay-img flex-row">
        <img class="img1" style="margin-bottom: 20px;" src="data:image/jpeg;base64,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">
        <img class="img2" style="translate: 18px ;" src="data:image/jpeg;base64,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">
        </div>
        
        <h4><span>2</span>&nbsp;saved stays</h4>
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
                <h1>Your Next Stay</h1>
            </div>
            <h4 style="line-height: 15px;"><p>Hosted by Ron and Shay beautiul house, with with amazing views</p></h4>
            <h4 style="letter-spacing: -1px;"><p>From May 23-26, 2023</p></h4>
            <h4 style="letter-spacing: -1px;"><p>Check-In for 2 guests</p></h4>
            <button class="next-oreder-img">Go to stay</button>
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
                    <h1>Madrid</h1>
                    <h4>hosted by Jonas</h4>
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
                    <h1>Tel-Aviv</h1>
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
import { orderService } from "../services/order-service.js";
// import { userService } from "../services/user-service.js";
import { socketService } from "../services/socket.service.js";
import chart from "../cmps/chart.vue";
export default {
  data() {
    return {
      // orders: [],
      user: null,
      renderOrder: false,
      // stays: [],
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadStaysUser" });
    const user = await this.$store.getters.user;
    // console.log('pppppppppp',orders.guestName);
    // const orders = userService.getUserOrder(user._id);
    // this.orders = orders;
    this.user = user;
    console.log('hostStays',user.stays);
    // console.log(user);
    // console.log("lalalalala", this.orders);
    // console.log("added order", user.orders);
    // console.log("this.user", this.user);
    socketService.on("host topic", user._id);
    socketService.on("order recived", this.addOrder);
  },
  methods: {
    toggle(val) {
      this.renderOrder = val;
    },
    // formattedTime(time) {
    //   return time.slice(0, 10);
    // },
    changeOrderStatus(order, val) {
      order.status = val;
      orderService.add(order);
      const msg = val;
      socketService.emit("order-status-change", msg);
    },
    changeOrderStatusBack(order) {
      if (order.status === "Approve") order.status = "Decline";
      else order.status = "Approve";
      orderService.add(order);
    },
    addOrder(order) {
      this.user.incomingOrders.unshift(order);
    },
    formatedPrice(price) {
      return new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
      }).format(price);
    },
  },
  computed: {},
  unmounted() {
    socketService.off("order recived", this.addMsg);
    socketService.off("host topic", user._id);
  },
  components: {
    appHeader,
    chart,
  },
};
</script>