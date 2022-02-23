<template>
  <div class="">
    <div class="d"><h2> The Tax-Evading Bank</h2> </div>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import "@/assets/styles.css";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
