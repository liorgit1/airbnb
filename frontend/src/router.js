import { createRouter, createWebHashHistory } from 'vue-router'
// import homePage from '../src/views/home-page.vue'
import explorePage from '../src/views/explore-app.vue'
import stayDetails from '../src/views/StayDetails.vue'
import stayIndex from '../src/views/StayIndex.vue'



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
    path: '/stay',
    name: 'explore-page',
    component: explorePage
  },
  {
    path: '/stay/:id',
    name: 'stay-details',
    component: stayDetails
  }
];





export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

