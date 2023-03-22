import { createRouter, createWebHashHistory } from 'vue-router'

import Chat from './views/Chat.vue'
import StayDetails from './views/StayDetails.vue'
import StayIndex from './views/StayIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import HostDetails from './views/HostDetails.vue'

const routes = [
  {
    path: '/stay',
    name: 'StayIndex',
    component: StayIndex
  },
  {
    path: '/stay/:id',
    name: 'StayDetails',
    component: StayDetails
  },
  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/login',
    name: 'LoginSignup',
    component: LoginSignup
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/Host/:id',
    name: 'HostDetails',
    component: HostDetails
  },
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

