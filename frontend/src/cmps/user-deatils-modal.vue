<template>
    <section v-if="userLogged" class="user-modal flex-col">
      <router-link class="spank" to="/wishList"> Wish List</router-link>
      <router-link class="border1" to="/"> Trips</router-link>

      <router-link to="/dashboard"> Dashboard</router-link>
      <router-link to="/trips" class="border1"> Account</router-link>
      <span class="spank" @click="doLogout">Logout</span>
      <router-link class="border1" to="/"> About</router-link>
    </section>

    <section v-else class="user-modal flex-col">
      <router-link to="/"> Messages</router-link>
      <span class="spank" @click="openModalLogin"> Login</span>
      <span class="spank"> Logout</span>
    </section>
</template>

<script>
import { userService } from "../services/user-service.js";
import { Share } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      userLogged: false,
    };
  },
  async created() {
    const loggedInUser =
      await userService.getLoggedinUser();
    if (!loggedInUser) this.userLogged = false;
    else {
      this.userLogged = true;
    }
  },
  methods: {
    openModalLogin() {
      this.$emit("openModalLogin");
    },
    doLogout() {
      this.$emit("closeModalDetails");
      this.$store.dispatch({ type: "logout" });
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
  },
  components: {},
};
</script>

<style></style>
