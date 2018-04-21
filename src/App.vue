<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <side-nav :show="show" :mapInfo="info" :latlon="latlon" :photoInfo="photoInfo" @getNaviPath="getNaviPath"></side-nav>
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
      photoInfo: null
    };
  },
  methods: {
    openSideBar() {
      this.show = true;
      axios
        .get(
          "https://maps.googleapis.com/maps/api/directions/json?origin=26,75&destination=30,80&key=AIzaSyBlQcHnS3aeoQhRcZV1S6tSuv79drbh--w"
        )
        .then(retrievedData => {
          console.log(retrievedData);
        });
    },
    closeSideBar() {
      this.show = false;
    },
    getNaviPath() {
      let curLoc = {
        lat: null,
        lng: null
      };
      navigator.geolocation.getCurrentPosition(function(position) {
        curLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
      alert("HEEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYY");
      dirAPIURL = `https://maps.googleapis.com/maps/api/directions/json?origin=${
        curLoc.lat
      },${curLoc.lng}&destination=${destination.lat},${
        destination.lng
      }&key=AIzaSyBlQcHnS3aeoQhRcZV1S6tSuv79drbh--w`;
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
              console.log(photoResponse.data.response);
              let photoUrl = `${
                photoResponse.data.response.photos.items[0].prefix
              }250x200${photoResponse.data.response.photos.items[0].suffix}`;
              this.photoInfo = photoUrl;
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
