<template>
  <section class="login-modal">
    <div class="flex space-between" style="    border-bottom: 1px solid #ddd;">
      <h1 class="loginHeader">Log in or Sign up</h1> 
      <button class="close-login" @click="closeModal">
        X
      </button>
    </div>
    <form class="log-container flex-col" @submit.prevent="setLogin">
      <div class="username-container">
        <span class="username"> Username :</span>
        <input
          v-model="user.username"
          type="text"
          placeholder="Enter your username"
        />
      </div>
      <div class="password-container">
        <span class="password"> Password :</span>
        <input
          v-model="user.password"
          type="password"
          placeholder="Enter your username"
        />
      </div>
      <button
        ref="myRefs"
        class="btn-login"
        @mousemove="calcMouse"
        :style="mousePos"
      >
        Log in
      </button>
      <p>{{ msg }}</p>
    </form>
  </section>
</template>

<script>
export default {
  name:"login-modal",
  data() {
    return {
      x: 0,
      y: 0,
      user: {
        username: "",
        password: "",
      },
      msg: "",
    };
  },
  created() {},
  methods: {
    setLogin() {
      if (!this.user.username || !this.user.password) {
        this.msg = "Please enter username/password";
        return;
      }
      this.$emit(
        "login",
        JSON.parse(JSON.stringify(this.user))
      );
      this.user.username = "";
      this.user.password = "";
      this.closeModal();
    },
    closeModal() {
      this.$emit("closeLoginModal")
    },
    calcMouse(e) {
       const div = this.$refs.myRefs;
      this.x = e.clientX - div.offsetLeft;
      this.y = e.pageY - div.offsetTop;
    },
  },
  computed: {
    mousePos() {
      return {
        "background-position": `calc((100 - (${this.x}))*1%) calc((100 - (${this.y}))*1%)`,
      };
    },
  },
};
</script>

<style>
</style>
