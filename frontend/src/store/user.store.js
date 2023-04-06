
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'

// var localLoggedinUser = null
// if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user || null)

import { userService } from "../services/user-service.js";
import { stayService } from "../services/stay-service.js";

import {
  socketService,
  SOCKET_EMIT_USER_WATCH,
  SOCKET_EVENT_USER_UPDATED,
} from "../services/socket.service.js";


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
      console.log(s);
      userService.saveUser(state.loggedinUser);
    },
    setReservationUser(state, { reservations }) {
      state.loggedinUser.reservations = reservations;
      userService.saveUser(state.loggedinUser);
    },
    addReservationUser(state, { newReservation }) {
      console.log('state.loggedinUser :>> ', state.loggedinUser);


      state.loggedinUser.reservations.unshift(newReservation);
      userService.saveUser(state.loggedinUser);
    },
    setLikedStay(state, { stayId }) {
      if (!state.loggedinUser) return
      if (!state.loggedinUser.likedStays) {
        state.loggedinUser = { likedStays: [stayId] }
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
    // async login({ commit, dispatch }, { userCred }) {
    //   console.log('userCred1111 :>> ', userCred);
    //   try {
    //     const user = await userService.login(userCred);
    //     commit({ type: "setLoggedinUser", user });
    //     console.log('user :>> ', user);
    //     // dispatch({ type: "loadStaysUser" });
    //     return user;
    //   } catch (err) {
    //     console.log("userStore: Error in login", err);
    //     throw err;
    //   }
    // },
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
    async signup({ commit, dispatch }, { userCred }) {
      try {
        const user = await userService.signup(userCred).then(
          dispatch({ type: 'login', userCred: userCred })
          );
          commit({ type: "setLoggedinUser", user });
          
          console.log(user)
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
        const stays = await userService.getUserStays(state.loggedinUser);
        commit({ type: "setStaysUser", stays });
        // const reservations = await userService.getUserReservation(state.loggedinUser);
        commit({ type: "setReservationUser", reservations });
      } catch (err) {
        console.error("Cannot Load stays", err);
        throw err;
      }
    },
    async setLikedStay({ commit, state }, { stayId }) {
      if (!state.loggedinUser) return
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
        // commit({ type: 'setOrderUser', orders })
      } catch (err) {
        console.error("Cannot Load stays", err);
        throw err;
      }
    },
    async saveUser(context, payload) {
      try {
        await userService
          .saveUser(payload.user);
        context.commit(payload);
      } catch (err) {
        console.error("Cannot change user", err);
        throw err;
      }
    },

    // async loadAndWatchUser({ commit }, { userId }) {
    //   try {
    //     const user = await userService.getById(userId);
    //     commit({ type: 'setWatchedUser', user })
    //     socketService.emit(SOCKET_EMIT_USER_WATCH, userId)
    //     socketService.off(SOCKET_EVENT_USER_UPDATED)
    //     socketService.on(SOCKET_EVENT_USER_UPDATED, user => {
    //       commit({ type: 'setWatchedUser', user })
    //     })
    //   } catch (err) {
    //     console.log('userStore: Error in loadAndWatchUser', err)
    //     throw err
    //   }
    // },
  }
};