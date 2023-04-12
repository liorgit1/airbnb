<template>
  <section v-if="user">
    <div class="alert" style="display: none;">
    </div>
    <section class="main-layout">
      <h1 class="trips">Trips</h1>
      <section class="user-trips">
        <div class="mini-card-grid mini-card grid-item-2">
          <div class="mini-card-header flex row wrap">
            <h1>Wishlist</h1>
          </div>
          <h4><span>{{ likedStays.length }}</span>&nbsp;stays that you dream to visit</h4>
          <button class="mini-card-btn">Go to wishlist</button>
        </div>
        <div class="mini-card-grid mini-card grid-item-3" v-for="order in user.orders" :key="order._id">
          <div class="mini-card-header">
            <h1>Messages</h1>
            <h4 v-if="order.status !== 'Pending'" @load="changeOrderStatus(order)">

              order #{{ orders.length }} has been {{ order.status }}
            </h4>
            <button class="mini-card-btn">Go to messages</button>
          </div>
        </div>
        <div class="mini-card next-stay flex row space-between grid-item-1" v-for="stay in user.stays" :key="stay">
          <div class="next-stay-first flex row wrap">
            <div class="mini-card-header flex wrap">
              <h1>Your Next Stay</h1>
            </div>
            <h4 style="line-height: 15px;">
              <p>{{ stays.summery }}</p>
            </h4>
            <h4 style="letter-spacing: -1px;">
              <p>From {{ orders.startDate }} to {{ orders.endDate }}</p>
            </h4>
            <h4 style="letter-spacing: -1px;">
              <p>Check-In for {{ orders.stayTime }} guests</p>
            </h4>
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
import { socketService } from "../services/socket.service.js";
// import chart from "../cmps/chart.vue";
export default {
  data() {
    return {
      orders: [],
      user: null,
      renderOrder: false,
      likedStays: [],
      stays: [],
    };
  },
  async created() {
    // this.$store.dispatch({ type: "loadAndWatchUser" });
    const user = await this.$store.getters.user;
    this.$store.dispatch({ type: "reloadOrders", orders: user.orders });
    // console.log('pppppppppp',orders.guestName);
    this.user = user;
    const orders = await this.$store.getters.user.orders;
    this.orders = orders;

    const stays = await this.$store.getters.user.stays;
    this.stays = stays;

    const likedStays = await this.$store.getters.user.likedStays;
    this.likedStays = likedStays;
    // console.log('hostStays',user.stays);
    console.log(orders);
    // console.log("lalalalala", user.orders);
    // console.log("added order", user.orders);
    // console.log("this.user", this.user);
    socketService.on('set-user-socket', user._id);
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
      this.user.orders.unshift(order);
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
    socketService.off('set-user-socket', user._id);
  },
  components: {
    // appHeader,
    // chart,
  },
};
</script>