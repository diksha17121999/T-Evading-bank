<template>
  <div class="container">
    <div class="brand-title">SIGN-UP</div>

    <form class="inputs">
      <label for="name">Email :</label>
      <input placeholder="Email" id="name" type="email" required />

      <label for="pw">Password :</label>
      <input
        placeholder="Password"
        type="password"
        id="pw"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        required
      />
      <button type="submit" @click="store()" >Sign Up</button>
    </form>
  </div>
</template>

<script>
import "@/assets/styles.css";

export default {
  name: "SignupView",
  methods: {
    store() {
      var name = document.getElementById("name");
      var pw = document.getElementById("pw");

      localStorage.setItem("name", name.value);
      localStorage.setItem("pw", pw.value);
      alert("Your account has been created");
    },
  },
};
</script>
