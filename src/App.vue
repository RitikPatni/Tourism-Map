<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <side-nav :show="show" :mapInfo="info" :latlon="latlon"></side-nav>
      <google-map name="tourist-map" @interface="handleFcAfterDateBack" @locdata="showLocInfo"></google-map>
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
      info: null,
      latlon: null
    };
  },
  methods: {
    onClickChild(value) {
      console.log(value); // someValue
    },
    handleFcAfterDateBack(event) {
      console.log("data after child handle: ", event);
      if (!this.show) this.show = true;
      else this.show = false;
      this.info = event;
    },
    showLocInfo(latlon) {
      console.log(latlon);
      this.latlon = latlon;
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
