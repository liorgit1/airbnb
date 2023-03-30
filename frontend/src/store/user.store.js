
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'

// var localLoggedinUser = null
// if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user || null)

import { userService } from "../services/user-service.js";
import { stayService } from "../services/stay-service.js";

import {
  socketService,
  SOCKET_EMIT_USER_WATCH,
  SOCKET_EVENT_USER_UPDATED,
} from '../services/socket.service.js'

var localLoggedinUser = null;
if (sessionStorage.user)
  localLoggedinUser = JSON.parse(sessionStorage.user || null);
export default {
  state: {
    loggedinUser: userService.getLoggedinUser(),
    watchedUser: null,
  },
  getters: {
    user(state) {
      return JSON.parse(JSON.stringify(state.loggedinUser));
    },
    userStays(state) {
      return JSON.parse(JSON.stringify(state.loggedinUser.stays));
    },
  },
  mutations: {
    setLoggedinUser(state, { user }) {
      state.loggedinUser = user ? { ...user } : null;
    },
    setWatchedUser(state, { user }) {
      state.watchedUser = user;
    },
    saveUser(state, { user }) {
      state.loggedinUser = user;
    },
    setStaysUser(state, { stays }) {
      state.loggedinUser.stays = stays;
      userService.saveUser(state.loggedinUser);
    },
    setOrderUser(state, { orders }) {
      state.loggedinUser.orders = orders;
      userService.saveUser(state.loggedinUser);
    },
    addOrderUser(state, { newOrder }) {
      state.loggedinUser.orders.unshift(newOrder);
      console.log(newOrder);
      userService.saveUser(state.loggedinUser);
    },
    setLikedStay(state, { stayId }) {
      if(!state.loggedinUser) return
      if (!state.loggedinUser.likedStays){
        state.loggedinUser = {likedStays:[stayId]}
      }
     else if (state.loggedinUser.likedStays.includes(stayId)) {
        const idx = state.loggedinUser.likedStays.findIndex(
          (id) => id === stayId
        );
        state.loggedinUser.likedStays.splice(idx, 1);
      }
      else state.loggedinUser.likedStays.push(stayId)
    },
  },
  actions: {
    async login({ commit, dispatch }, { userCred }) {
      try {
        const user = await userService.login(userCred);
        commit({ type: "setLoggedinUser", user });
        dispatch({ type: "loadStaysUser" });
        return user;
      } catch (err) {
        console.log("userStore: Error in login", err);
        throw err;
      }
    },
    async signup({ commit }, { userCred }) {
      try {
        const user = await userService.signup(userCred);
        commit({ type: "setLoggedinUser", user });
        return user;
      } catch (err) {
        console.log("userStore: Error in signup", err);
        throw err;
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout();
        commit({ type: "setLoggedinUser", user: null });
      } catch (err) {
        console.log("userStore: Error in logout", err);
        throw err;
      }
    },
    async loadStaysUser({ commit, state }) {
      try {
        const stays = await userService.getUserStays(state.loggedinUser.id);
        commit({ type: "setStaysUser", stays });
        const orders = await userService.getUserOrder(state.loggedinUser.id);
        commit({ type: "setOrderUser", orders });
      } catch (err) {
        console.error("Cannot Load stays", err);
        throw err;
      }
    },
    async setLikedStay({ commit, state }, { stayId }) {
      if(!state.loggedinUser) return
      commit({ type: "setLikedStay", stayId });
      try {
        await userService.saveUser(state.loggedinUser);
      } catch (err) {
        console.error("Cannot Load stays", err);
        throw err;
      }
    },
    async loadStaysLikedUser({ commit, state }, { likedStays }) {
      try {
        const stays = await userService.getUserLikedStays(likedStays);
        stays.forEach((stay) => (stay.isLiked = true));
        return stays;
        commit({ type: 'setOrderUser', orders })
      } catch (err) {
        console.error("Cannot Load stays", err);
        throw err;
      }
    }
}
}