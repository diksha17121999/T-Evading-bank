<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/signup"> Signup </router-link>
    <router-link to="/login"> Login </router-link>
    <router-link to="/mybank"> My-Bank </router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/bank.png");
  background-color: #cccccc;
  height: 500px;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}

nav a:hover{
color: #1da1f2;
  border: 1px solid black;
}

nav  {
  display: block;
  padding: 10px;
  margin-bottom: 10px;
    background-color: white;
      cursor: pointer;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #1da1f2;
  border: 1px solid black;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
}
</style>
