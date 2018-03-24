<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
import axios from "axios";
export default {
  name: "googleMap",
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [
        {
          latitude: 26.9372,
          longitude: 75.8152,
          name: "NaharGarh"
        },
        {
          latitude: 26.9851,
          longitude: 75.8456,
          name: "JaiGarh"
        },
        {
          latitude: 26.9258,
          longitude: 75.8237,
          name: "CityPalace"
        }
      ],
      map: null,
      bounds: null,
      markers: [],
      show: true
    };
  },
  mounted: function() {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates[0];
    const foursquareUrl = "https://api.foursquare.com/v2/venues/search?ll=";
    const foursquareSecretKey =
      "&client_secret=RE40UE33TGTIIVZEIWIRW3KNHDG3E3UPRLZLE40O1PDDXOIP&v=20180312";
    const foursquareClientId =
      "&limit=1&client_id=JVYYDZMWQWFNXS5EAYNSCTUKMA2DWO2ZNJRMFAIQXXT5WX5S";
    let mapZoomStatus = false;
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    };
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        title: coord.name
      });
      this.markers.push(marker);
      this.map.fitBounds(this.bounds.extend(position));
      {
        marker.addListener("click", function() {
          let markerLat = this.getPosition().lat();
          let markerLng = this.getPosition().lng();
          let cityDetails = "";
          let endPoint = `${foursquareUrl}${markerLat},${markerLng}${foursquareClientId}${foursquareSecretKey}`;
          axios
            .get(endPoint)
            .then(function(response) {
              console.log(response);
              // getting data out from local json
              doSomething(response);
            })
            .catch(function(error) {
              console.log(error);
            });
          // calling data
          function doSomething(data) {
            console.log(data);
              $emit("clicked", data);
          }
          if (!mapZoomStatus) {
            this.map.setZoom(12);
            this.map.setCenter(marker.getPosition());
            mapZoomStatus = true;
          } else {
            this.map.setZoom(10);
            this.map.setCenter(marker.getPosition());
            mapZoomStatus = false;
          }
        });
      }
    });
  }
};
</script>
<style scoped>
.google-map {
  width: 60vw;
  height: 90vh;
  margin: 0 auto;
  background: gray;
}
</style>
