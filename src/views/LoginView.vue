<template>
  <div class="container">
    <div class="brand-title">LOGIN</div>

    <form class="inputs">
      <label>Email :</label>
      <input placeholder="Email" type="email" required />

      <label>Password :</label>
      <input placeholder="Password" type="password" required />

      <button type="submit" @click="check()">Login</button>
    </form>
  </div>
</template>
<script>
import "@/assets/styles.css";

export default {
  name: "LoginView",
  methods: {
    check() {
      var storedName = localStorage.getItem("name");
      var storedPw = localStorage.getItem("pw");

      var userName = document.getElementById("userName");
      var userPw = document.getElementById("userPw");

      if (userName.value == storedName && userPw.value == storedPw) {
        alert("You are logged in.");
      } else {
        alert("Error on login");
      }
    },
  },
};
</script>
