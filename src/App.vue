<template>
  <div id="app">
    <SibarAdmin></SibarAdmin>
    <SidebarAdmin2></SidebarAdmin2>
    <Nav id="menuu"></Nav>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
// import Headerr from '@/components/Headerr.vue'
import Nav from "../src/components/Client/Nav";
import Footer from "../src/components/Client/Footer";
import SibarAdmin from "../src/components/Admin/SidebarAdmin";
import SidebarAdmin2 from "../src/components/Admin/SidebarAdmin2";
export default {
  components: {
    // Headerr
      Nav,
    Footer,
    SibarAdmin,
    SidebarAdmin2,
  },
};
</script>
<style>
#menuu{
  position: fixed;
  z-index: 9999;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
