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
          <h4><span>{{ user.likedStays.length }}</span>&nbsp;stays that you dream to visit</h4>
          <button class="mini-card-btn" style="margin-top: 65px;" @click="goToWishList()">Go to wishlist</button>
        </div>
        <div v-if="user" class="mini-card-grid mini-card grid-item-3">
          <h1>Messages</h1>
          <div v-for="order in user.orders.slice(0,7)" :key="order._id" class="mini-card-header ">
            <h4 v-if="order.status !== 'Pending'" @load="changeOrderStatus(order)">
              order #{{ order._id.slice(-2) }} has been {{ order.status }}d
            </h4>
          </div>
        </div>
        <div class="mini-card next-stay flex row space-between grid-item-1" v-if="user && user.orders !== 0">
          <div class="next-stay-first flex row wrap">
            <div class="mini-card-header flex wrap">
              <h1>Your Next Stay</h1>
            </div>
            <h4 >
              <p class="next-stay-text" >{{ this.myNextStay.summary}}</p>
            </h4>
            <h4 style="letter-spacing: -1px;">
              <p>From {{ user.orders[0].startDate }} to {{ user.orders[0].endDate }}</p>
            </h4>
            <h4 style="letter-spacing: -1px;">
              <p>Check-In for {{ user.orders[0].stayTime }} guests</p>
            </h4>
            <button class="next-oreder-img" @click=goToHoliday()>Go to stay</button>
          </div>
          <div class="next-stay-img">
            <img :src="this.myNextStay.imgUrls[0]" alt="">
          </div>
        </div>
        <section v-if="user" class="old-trips grid-item">
          <h2 style="margin-bottom: 50px;">Where have you been</h2>
          <ul class="mini-stays flex row" v-for="order in user.orders.slice(-2)" :key="order._id">
            <li class="mini-stay flex row nowrap">
              <div class="mini-stay-img">
                <img :src="imageUrls[order._id]">
              </div>
              <div class="mini-stay-desc flex row wrap">
                <h3 style="width=100%">{{ order.country }}</h3>
                <h4 class="next-stay" style="margin-top: -50px;">{{order.name}}</h4>
                <h4 class="next-stay" style="margin-top: -50px;">{{ order.startDate }} - {{ order.endDate }}</h4>
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
import { stayService } from "../services/stay-service";
// import chart from "../cmps/chart.vue";
export default {
  data() {
    return {
      orders: [],
      user: null,
      renderOrder: false,
      likedStays: [],
      stays: [],
      myNextStay: {},
      imageUrls: {}
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

    const myNextStay = await stayService.getById(this.user.orders[0].stay_id)
    console.log('mynextstay', myNextStay);
    this.myNextStay = myNextStay

    const likedStays = await this.$store.getters.user.likedStays;
    this.likedStays = likedStays;
    // console.log('hostStays',user.stays);
    console.log(orders);
    // console.log("lalalalala", user.orders);
    // console.log("added order", user.orders);
    // console.log("this.user", this.user);

    if (this.user) {
      for (const order of this.user.orders) {
        const imageUrl = await this.imageUrl(order)
        this.imageUrls[order._id] = imageUrl
      }
      console.log(' this.imageUrls :>> ', this.imageUrls);
    }
    socketService.on('set-user-socket', this.user._id);
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
    async imageUrl(order) {
      if (this.user) {
        const previousStay = await stayService.getById(order.stay_id);
        console.log('previousStay?.imgUrls[0]  :>> ', previousStay?.imgUrls[0]);
        return previousStay?.imgUrls[0] || null
      }
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
    async goToHoliday() {
      this.$router.push('/stay/' + this.myNextStay._id)
      ElNotification({
        title: "Ready for paradise?",
        message:
          "Welcome to your next dream house vacation ",
        type: "success",
      });
    },

    async goToWishList() {
      this.$router.push('/wishlist/')
      ElNotification({
        title: "welcome back !",
        message:
          "Have another look at your favorite stays ",
      });
    },
  },

  computed: {

  },
  unmounted() {
    socketService.off("order recived", this.addMsg);
    socketService.off('set-user-socket', this.user._id);
  },
  components: {
    // appHeader,
    // chart,
  },
};
</script>