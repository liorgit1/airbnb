<template>
  <section v-if="userLogged" class="before-login-modal flex-col">

    <router-link to="/dashboard"> 
    <h1 style="font-weight: bold;" class="border1">Dashboard</h1>
    </router-link>

    <router-link  to="/wishList"> 
    <h1 class="border1">Wish List</h1>
    </router-link>

    <router-link  to="/trip"> 
    <h1 class="border1">Trips</h1>
    </router-link>

    <router-link  to="/AddStay"> 
    <h1 class="border1">Add your home</h1>
    </router-link>

    <!-- <router-link to="/"> 
    <h1 class="border1">Account</h1> 
    </router-link> -->

    <h1 class="border1" @click="doLogout">Logout</h1>
    <!-- <router-link class="border1" to="/"> About</router-link> -->
  </section>

  <section v-else class="before-login-modal flex-col">
    <!-- <router-link to="/"> Messages</router-link> -->
    <h1 style="font-weight: bold;" class="border1" @click="openModalLogin"> Login</h1>
    <h1 class="border1" @click="openSingUpModal"> Sign Up</h1>
    <!-- <span class="spank"> Logout</span> -->
    <RouterLink to="/Addstay">
    <h1 class="border1" to="/AddStay">earthbnb your home</h1>
  </RouterLink>
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
