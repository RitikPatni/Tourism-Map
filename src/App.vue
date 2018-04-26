<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <side-nav :show="show" :mapInfo="info" :latlon="latlon" :photoInfo="photoInfo" :weatherInfo="weatherInfo" :sun="sun"></side-nav>
      <google-map name="tourist-map" @locdata="showLocInfo" @openSideBar="openSideBar" @closeSideBar="closeSideBar"></google-map>
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
      latlon: null,
      photoInfo: null,
      weatherInfo: null,
      sun: { set: null, rise: null }
    };
  },
  methods: {
    openSideBar() {
      this.show = true;
    },
    closeSideBar() {
      this.show = false;
    },
    showLocInfo(latlon) {
      this.latlon = latlon;
      const foursquareUrl = "https://api.foursquare.com/v2/venues/search?ll=";
      const foursquarePhotoUrl = "https://api.foursquare.com/v2/venues/";
      const foursquareSecretKey =
        "&client_secret=RE40UE33TGTIIVZEIWIRW3KNHDG3E3UPRLZLE40O1PDDXOIP&v=20180312";
      const foursquareClientId =
        "&limit=1&client_id=JVYYDZMWQWFNXS5EAYNSCTUKMA2DWO2ZNJRMFAIQXXT5WX5S";
      const foursquarePhotoClientId =
        "&client_id=JVYYDZMWQWFNXS5EAYNSCTUKMA2DWO2ZNJRMFAIQXXT5WX5S";
      const foursquarePhotoSecretKey =
        "&client_secret=RE40UE33TGTIIVZEIWIRW3KNHDG3E3UPRLZLE40O1PDDXOIP&group=venue&v=20180312";
      let endPoint = `${foursquareUrl}${latlon.lat},${
        latlon.lng
      }${foursquareClientId}${foursquareSecretKey}`;
      let weatherAPIURL = `https://api.weatherbit.io/v2.0/current?&lat=${
        latlon.lat
      }&lon=${latlon.lng}&key=7239a913194d4caab598ef99121895f3`;
      axios
        .get(weatherAPIURL)
        .then(response => {
          this.weatherInfo = response.data;
        })
        .catch(error => console.log(error));
      axios
        .get(endPoint)
        .then(response => {
          this.info = response.data.response.venues;
          let photoEndPoint = `${foursquarePhotoUrl}${
            this.info[0].id
          }/photos?${foursquarePhotoClientId}${foursquarePhotoSecretKey}`;
          console.log(photoEndPoint);
          axios
            .get(photoEndPoint)
            .then(photoResponse => {
              console.log(photoResponse);
              if (photoResponse.data.response.photos.count != 0) {
                let photoUrl = `${
                  photoResponse.data.response.photos.items[0].prefix
                }250x200${photoResponse.data.response.photos.items[0].suffix}`;
                this.photoInfo = photoUrl;
              } else this.photoInfo = "http://via.placeholder.com/250x200";
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
}
</style>
