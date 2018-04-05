<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <side-nav></side-nav>
      <google-map name="tourist-map" @clicked="onClickChild"></google-map>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import reset from "reset-css";
import Header from "./components/Header.vue";
import SideNav from "./components/SideNav";
import googleMap from "./components/Map";
export default {
  name: "app",
  components: {
    Header,
    SideNav,
    googleMap
  },
  methods: {
    onClickChild(value) {
      console.log(value); // someValue
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "src/assets/main.css";

.wrapper {
  display: flex;
}
</style>
