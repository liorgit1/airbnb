<template>
  <section class="main-layout" v-if="user">
    <div class="my-details flex-row">
      <button class="flex align-center" @click="toggle(false)">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: block; height: 24px; width: 24px; fill: currentcolor"
        >
          <path
            d="m17.9772237 1.90551573.1439807.13496509 13.2525 13.25240998-1.4142088 1.4142184-.9603513-.9603098.0008557 12.5832006c0 1.0543618-.8158778 1.9181651-1.8507377 1.9945143l-.1492623.0054857h-22c-1.0543618 0-1.91816512-.8158778-1.99451426-1.8507377l-.00548574-.1492623-.00085571-12.5822006-.95878858.9593098-1.41421142-1.414217 13.25247161-13.25243161c1.1247615-1.1246896 2.9202989-1.16967718 4.0986078-.13494486zm-2.5902053 1.46599297-.0942127.08318915-10.29366141 10.29310155.00085571 14.5822006h5.9991443l.0008557-9.9966c0-1.0543764.8158639-1.9181664 1.8507358-1.9945144l.1492642-.0054856h6c1.0543764 0 1.9181664.8158639 1.9945144 1.8507358l.0054856.1492642-.0008557 9.9966h6.0008557l-.0008557-14.5832006-10.2921737-10.29212525c-.3604413-.36046438-.9276436-.38819241-1.3199522-.08316545zm3.6129816 14.9618913h-6l-.0008557 9.9963994h6z"
          ></path>
        </svg>
        My assets
      </button>
      <button @click="toggle(true)" class="flex align-center">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: block; height: 22px; width: 24px; fill: currentcolor"
        >
          <path
            d="m26 6h-4v-2a2.00229 2.00229 0 0 0 -2-2h-8a2.002 2.002 0 0 0 -2 2v2h-4a5.00588 5.00588 0 0 0 -5 5v14a5.00588 5.00588 0 0 0 5 5h20a5.00588 5.00588 0 0 0 5-5v-14a5.00588 5.00588 0 0 0 -5-5zm-14.00146-2h8.00146v2h-8.00134zm-5.99854 24a3.00328 3.00328 0 0 1 -3-3v-14a3.00328 3.00328 0 0 1 3-3h4v20zm6 0-.00122-20h8.00122v20zm17-3a3.00328 3.00328 0 0 1 -3 3h-4v-20h4a3.00328 3.00328 0 0 1 3 3z"
          ></path>
        </svg>
        Received orders
      </button>
    </div>
    <h2 class="dash-header">Revenues info</h2>
    <div class="flex-row user-prof">
      <div class="flex-col align-center">
        <div class="user-rate">
          <span> Total Rate </span>
          <div class="flex card-rate">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="display: block; height: 16px; width: 14px;translate:-69px; fill: #ff385c"
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
           9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
            7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <section style="translate: -67px;">
            <h4>Avarge Rate: {{this.totalRate.toFixed(2)}} </h4>
            <h4>Total Reviews: {{this.reviewsCount}} </h4>
          </section>
          </div>
        </div>
        <div class="user-profit" >
          <span>Total revenues </span>
          <div class="profit" v-if="user.incomingOrders!== 0">
            <div class="flex-col">
              <span>Month </span>
              <span>${{monthlyIncome()}} </span>
            </div>
            <div class="flex-col">
              <span>Year </span>
              <span>${{yearlyIncome()}}</span>
            </div>
            <div class="flex-col">
              <span>Total </span>
              <span>${{overAllIncome()}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="orders-div">
        <span>Orders</span>
        <chart 
        :data="countOrdersByStatus(this.user.incomingOrders)"
        />
      </div>
    </div>

    <div class="user-order" v-if="renderOrder">
      <h2>My orders</h2>
      <table v-if="user" style="overflow-x: auto">
        <tr class="table-header">
          <th class="stay-name-details">Guest</th>
          <th class="stay-name-details">Asset</th>
          <th class="user-order-th">Order Date</th>
          <th class="user-order-th">Check in - Check out</th>
          <th class="user-order-th">Status</th>
          <th class="user-order-th">Revenue</th>
          <th class="user-order-th">Actions</th>
        </tr>
        <tr  v-for="order in user.incomingOrders" :key="order._id">
          <td class="flex align-center stay-name-details">
            <div class="review-img q-pa-md q-gutter-sm">
              <!-- <q-avatar>
                <img class="img" :src="orders.imgUrls" />
              </q-avatar> -->
            </div>
            {{ order.guestName }}
          </td>
          <!-- <td class="stay-name-details">
         
          </td> -->
          <td class="stay-name-details">
            {{ order.name }}
          </td>
          <td>{{ order.created }}</td>
          <td>
          </td>
          <td>{{ order.status }}</td>
          <td>$ {{ order.totalPrice }}</td>
          <td v-if="order.status !== 'Pending'">
            <button
              class="btn clikable"
              @click="changeOrderStatusBack(order)"
              :style="{
                color: order.status === 'Decline' ? 'green' : 'red',
              }"
            >
              {{ order.status === "Decline" ? "Approve" : "Decline" }}
            </button>
          </td>
          <td v-else class="flex-row">
            <button
              @click="changeOrderStatus(order, 'Approve')"
              class="btn clikable"
            >
              Approve
            </button>
            <button
              @click="changeOrderStatus(order, 'Decline')"
              class="btn clikable"
            >
              Decline
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="user-stays" v-if="!renderOrder && user">
      <h3>My stays</h3>
      <table>
        <tr>
          <th></th>
          <th class="stay-name-details">Name</th>
          <th>Price per night</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
        <tr v-for="stay in user.stays" :key="stay">
          <td>
            <div class="review-img q-pa-md q-gutter-sm"></div>
          </td>
          <td class="stay-name-details">{{ stay.name }}</td>
          <td>${{ stay.price }}</td>
          <td>
            {{ stay.loc.country }},
            {{ stay.loc.adress }}
          </td>
          <td>edit</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import { utilService } from "../services/util-service.js";
import { orderService } from "../services/order-service.js";
// import { userService } from "../services/user-service.js";
import { socketService } from "../services/socket.service.js";
import { stayService } from "../services/stay-service.js";
import chart from "../cmps/chart.vue";
export default {
  data() {
    return {
      orders: [],
      user: null,
      renderOrder: false,
      totalRate: null,
      reviewsCount: null,
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
    console.log(user);
    console.log('hostStays',this.user.stays);
    // const orders = await this.$store.getters.orders;
    // this.orders = orders;
    // console.log("lalalalala", this.orders);
    // console.log("added order", user.orders);
    // console.log("this.user", this.user);
    socketService.on("set-user-socket", user._id);
    socketService.on("order recived", this.addOrder);

    const sumReviews = this.getReviewsSummary(this.user.stays)
    console.log('sumReviews', sumReviews);
    this.reviewsCount = sumReviews.reviewsCount
    this.totalRate = sumReviews.totalRate

  },
  methods: {
    toggle(val) {
      this.renderOrder = val;
    },
    // formattedTime(time) {
    //   return time.slice(0, 10);
    // },
// Calculates the total revenue from all incoming orders
overAllIncome() {
    let totalPrice = 0;
    if (this.user.incomingOrders && this.user.incomingOrders.length > 0) {
      for (let i = 0; i < this.user.incomingOrders.length; i++) {
        totalPrice += this.user.incomingOrders[i].totalPrice;
      }
    }
    return totalPrice;
  },
// Calculates the revenue for the current month from incoming orders
monthlyIncome() {
  let totalPrice = 0;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  if (this.user.incomingOrders && this.user.incomingOrders.length > 0) {
    for (let i = 0; i < this.user.incomingOrders.length; i++) {
      const order = this.user.incomingOrders[i];
      const orderDate = new Date(order.startDate);
      const orderMonth = orderDate.getMonth();
      const orderYear = orderDate.getFullYear();
      
      if (orderMonth === currentMonth && orderYear === currentYear) {
        totalPrice += order.totalPrice;
      }
    }
  }
  
  return totalPrice;
},

yearlyIncome() {
  let totalPrice = 0;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  if (this.user.incomingOrders && this.user.incomingOrders.length > 0) {
    for (let i = 0; i < this.user.incomingOrders.length; i++) {
      const order = this.user.incomingOrders[i];
      const orderDate = new Date(order.startDate);
      const orderYear = orderDate.getFullYear();
      
      if (orderYear === currentYear) {
        totalPrice += order.totalPrice;
      }
    }
  }
  
  return totalPrice;
},

countOrdersByStatus(orders) {
  const initialCounts = { total: 0, pending: 0, approve: 0, decline: 0 };
  const counts = orders.reduce((acc, order) => {
    acc.total++;
    switch (order.status) {
      case 'Pending':
        acc.pending++;
        break;
      case 'Approve':
        acc.approve++;
        break;
      case 'Decline':
        acc.decline++;
        break;
      default:
        break;
    }
    return acc;
  }, initialCounts);
  console.log('orders', orders);
  console.log('status',counts.total, counts.pending, counts.approve, counts.decline );
  return [counts.total, counts.pending, counts.approve, counts.decline];
} ,

getReviewsSummary(stays) {
  let totalReviews = 0;
  let totalRate = 0;
  stays.forEach((stay) => {
    stay.reviews.forEach((review) => {
      totalReviews++;
      totalRate +=
        review.rate.Accuracy +
        review.rate.CheckIn +
        review.rate.Cleanliness +
        review.rate.Communication +
        review.rate.Location +
        review.rate.Value;
    });
  });
  const avgRate = totalRate / (totalReviews * 6);
  return { reviewsCount: totalReviews, totalRate: avgRate };
},
 
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
      }
    },
      computed: {
   
      },
  unmounted() {
    socketService.off("order recived", this.addMsg);
    socketService.off("set-user-socket", user._id);
  },
  components: {
    appHeader,
    chart,
  },
};
</script>

<style></style>
