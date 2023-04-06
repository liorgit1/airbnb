<template>
    <section class="login-modal">
      <div class="flex space-between" style="    border-bottom: 1px solid #ddd;">
        <h1 class="loginHeader"> Sign up</h1>
        <button class="close-login" @click="closeModal">
          X
        </button>
      </div>
      <form class="log-container flex-col" @submit.prevent="setSignup">
        <div class="username-container">
          <span class="username"> Fullname :</span>
          <input
            v-model="user.fullname"
            type="text"
            placeholder="Enter your fullname"
          />
        </div>
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
          @click="setSignup"
        >
          Sign Up
        </button>
        <p>{{ msg }}</p>
      </form>
    </section>
  </template>
  <script>
  export default {
    name:"signup-modal",
    data() {
      return {
        x: 0,
        y: 0,
        user: {
          fullname:"",  
          username: "",
          password: "",
        },
        msg: "",
      };
    },
    created() {},
    methods: {
        setSignup() {
        if (!this.user.fullname||!this.user.username || !this.user.password) {
          this.msg = "Please enter fullname/username/password";
          return;
        }
        this.$emit(
          "signup",
          JSON.parse(JSON.stringify(this.user))
        );
        this.user.fullname = "";
        this.user.username = "";
        this.user.password = "";
        this.closeModal();
      },
      closeModal() {
        this.$emit("closeSignUpModal")
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