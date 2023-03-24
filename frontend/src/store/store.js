import Vuex from 'vuex'

import { userStore } from './user.store.js'
// import  StayStore  from './stay-store.js'
// import { reviewStore } from './review.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    // carStore,
    // reviewStore
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {

  },
  
})
