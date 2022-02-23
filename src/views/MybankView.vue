<template>
  <div class="container">
    <div class="brand-logo"></div>
    <div class="brand-title">MY BANK</div>
    <div class="inputs">
      <label>Name :</label>
      <input type="name" id="name" required />

      <label>Passbook Number :</label>
      <input
        type="text"
        id="passbook"
        maxlength="12"
        pattern="\d{12}"
        title="Please enter exactly 10 digits"
        required
      />
      <label>Amount :</label>
      <input
        title="Maximum Amount: $60000"
        type="number"
        id="amount"
        min="0.00"
        max="600000.00"
        step="0.01"
        required
      />
      <label>Phone number :</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        required
      />

      <button type="submit" @click="find()">Add Money</button>
    </div>
  </div>
  <nav>
    <router-link to="/mybank/calculatetax">Calculate Tax</router-link>
    <router-link to="/mybank/checkpaasbook"> Check Paasboook </router-link>
  </nav>
</template>

<script>
import "@/assets/styles.css";
export default {
  name: "/MybankView",
  methods: {
    find() {
      if (
        document.getElementById("name") &&
        document.getElementById("paasbook") &&
        document.getElementById("amount") &&
        document.getElementById("phone")
      )
        alert("Money has been added");
      else alert("We Cannot Process Your Request Choose Some Other Bank");
    },
  },
};
</script>

<style scoped>
nav a:hover {
  height: 40px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: none;
}

nav {
  display: block;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
}

nav a {
  color: white;
  margin-top: 20px;
  margin-right: 3px;
  background: #1da1f2;
  height: 35px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 6px 6px 6px #d5dde4, -6px -6px 6px rgb(120, 123, 131);
  transition: 0.5s;
}
</style>
