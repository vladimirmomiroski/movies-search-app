<template>
  <div>
    <Navbar/>
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import Navbar from './components/layout/Navbar.vue'
import Footer from "./components/layout/Footer.vue";

export default {
  components: {
     Navbar,
     Footer
  },
};
</script>

<style scoped>
</style>
