<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <side-nav :show="show" :mapInfo="info"></side-nav>
      <google-map name="tourist-map" @interface="handleFcAfterDateBack"></google-map>
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
  data: function() {
    return {
      show: false,
      info: null
    };
  },
  methods: {
    onClickChild(value) {
      console.log(value); // someValue
    },
    handleFcAfterDateBack(event) {
      console.log("data after child handle: ", event);
      this.show = true;
      this.info = event;
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
