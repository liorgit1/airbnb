import Vuex from 'vuex'

import userStore from './user.store.js'
import StayStore from './stay-store.js'
import orderStore from './order-store.js'
// import { reviewStore } from './review.store.js'


export const store = Vuex.createStore({
  strict: true,

  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  },
  modules: {
    StayStore,
    userStore,
    orderStore
    // reviewStore
  },

})
