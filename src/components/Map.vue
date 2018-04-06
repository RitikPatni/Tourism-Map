<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
import axios from "axios";
export default {
  name: "google-map",
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [
        {
          latitude: 20.5937,
          longitude: 78.9629,
          name: "Centre Of India"
        },
        {
          latitude: 34.083656,
          longitude: 74.797371,
          name: "Srinagar"
        },
        {
          latitude: 8.0883,
          longitude: 77.5385,
          name: "KanyaKumari"
        },
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
      show: true,
      currentMarker: null,
      markerInfo: ""
    };
    this.$emit("markerData", currentMarker);
  },
  mounted: function() {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates[0];
    let mapZoomStatus = false;
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    };
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.map(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        title: coord.name
      });
      this.markers.push(marker);
      self = this;
      console.log(this.currentMarker);
      this.map.fitBounds(this.bounds.extend(position));
      {
        marker.addListener("click", function() {
          let markerLat = this.getPosition().lat();
          let markerLng = this.getPosition().lng();
          console.log(this);
          self.currentMarker = {
            lat: this.getPosition().lat(),
            lng: this.getPosition().lng()
          };
          getData(markerLat, markerLng);
          if (!mapZoomStatus) {
            this.map.setZoom(7);
            this.map.setCenter(marker.getPosition());
            mapZoomStatus = true;
          } else {
            this.map.setZoom(4);
            this.map.setCenter(marker.getPosition());
            mapZoomStatus = false;
          }
        });
        function getData(latitude, longitude) {
          const foursquareUrl =
            "https://api.foursquare.com/v2/venues/search?ll=";
          const foursquareSecretKey =
            "&client_secret=RE40UE33TGTIIVZEIWIRW3KNHDG3E3UPRLZLE40O1PDDXOIP&v=20180312";
          const foursquareClientId =
            "&limit=1&client_id=JVYYDZMWQWFNXS5EAYNSCTUKMA2DWO2ZNJRMFAIQXXT5WX5S";
          let endPoint = `${foursquareUrl}${latitude},${longitude}${foursquareClientId}${foursquareSecretKey}`;
          console.log(endPoint);
          axios
            .get(endPoint)
            .then(function(response) {
              console.log(...response);
              self.$emit("interface", response);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    });
  }
};
</script>
<style scoped>
.google-map {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background: gray;
  position: relative;
}
</style>
