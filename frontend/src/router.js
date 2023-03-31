import { createRouter, createWebHashHistory } from 'vue-router'
// import homePage from '../src/views/home-page.vue'
import exploreApp from './views/ExploreApp.vue'
import stayDetails from '../src/views/StayDetails.vue'
import stayIndex from '../src/views/StayIndex.vue'
import confirmation from './views/confirmation.vue'
import userTrip from '../src/views/UserTrip.vue'
// import userWishList from '../src/views/WishList.vue'
// import userDashboard  from '../src/views/User-Dashboard.vue'



const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: homePage
  // },
  {
    path: '/',
    name: 'stayIndex',
    component: stayIndex
  },
  {
    path: '/Explore',
    name: 'exploreApp',
    component: exploreApp
  },
  {
    path: '/stay/:id',
    name: 'stay-details',
    component: stayDetails
  },
  { 
    path: '/stay/confirm',
    name: 'confirmation',
    component: confirmation
  },
  {
    path: '/trip',
    name: 'user-trip',
    component: userTrip
  },
];





export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

