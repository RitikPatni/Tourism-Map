<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <side-nav :show="show" :mapInfo="info" :latlon="latlon"></side-nav>
      <google-map name="tourist-map" @locdata="showLocInfo"></google-map>
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
    showLocInfo(latlon) {
      if (!this.show) this.show = true;
      else this.show = false;
      console.log(latlon);
      this.latlon = latlon;
      const foursquareUrl = "https://api.foursquare.com/v2/venues/search?ll=";
      const foursquareSecretKey =
        "&client_secret=RE40UE33TGTIIVZEIWIRW3KNHDG3E3UPRLZLE40O1PDDXOIP&v=20180312";
      const foursquareClientId =
        "&limit=1&client_id=JVYYDZMWQWFNXS5EAYNSCTUKMA2DWO2ZNJRMFAIQXXT5WX5S";
      let endPoint = `${foursquareUrl}${latlon.lat},${
        latlon.lng
      }${foursquareClientId}${foursquareSecretKey}`;
      console.log(endPoint);
      axios
        .get(endPoint)
        .then(response => {
          this.info = response.data.response.venues;
        })
        .catch(function(error) {
          console.log(error);
        });
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
