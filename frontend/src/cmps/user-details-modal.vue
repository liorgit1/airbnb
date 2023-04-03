<template>
  <section v-if="userLogged" class="user-modal flex-col">
    <router-link class="spank" to="/wishList"> Wish List</router-link>
    <router-link class="border1" to="/trip"> Trips</router-link>

    <router-link to="/dashboard"> Dashboard</router-link>
    <router-link to="/" class="border1"> Account</router-link>
    <span class="spank" @click="doLogout">Logout</span>
    <router-link class="border1" to="/"> About</router-link>
  </section>

  <section v-else class="before-login-modal flex-col">
    <router-link to="/"> Messages</router-link>
    <span class="border1" @click="openModalLogin"> Login</span>
    <span class="border1" @click="openSingUpModal"> Sign Up</span>
    <span class="spank"> Logout</span>
  </section>
</template>

<script>
import { userService } from "../services/user-service";
import { Share } from "@element-plus/icons-vue";
import { watch } from "vue";
export default {
  data() {
    return {
      userLogged: false,
    };
  },
  async created() {
    const loggedInUser = await userService.getLoggedinUser();
    if (!loggedInUser) this.userLogged = false;
    else {
      this.userLogged = true;
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    openModalLogin() {
      this.$emit("openModalLogin");
    },
    openSingUpModal() {
      this.$emit("openSignUpModal");
    },
    doLogout() {
      this.$emit("closeModalDetails");
      this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
  },
  components: {},

  watch: {
  'user': {
    handler() {
      if (this.user) this.userLogged = true;
      else this.userLogged = false;
    },
    deep: true,
    immediate: true,
  },
},
};
</script>

<style></style>
