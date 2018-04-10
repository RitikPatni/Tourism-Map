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
      markerCoordinates: [],
      map: null,
      bounds: null,
      markers: [],
      show: true,
      currentMarker: null,
      markerInfo: ""
    };
  },
  mounted: function() {
    axios
      .get(
        "https://gist.githubusercontent.com/RitikPatni/366a1fff43e0d92f81688ee7a83dbf47/raw/fab839cf2de9ee4ea05009d537214ebe0b9ee68a/tourist-places.json"
      )
      .then(retrievedData => {
        this.markerCoordinates = retrievedData.data;
        this.bounds = new google.maps.LatLngBounds();
        const element = document.getElementById(this.mapName);
        const mapCentre = this.markerCoordinates[0];
        let mapZoomStatus = false;
        const options = {
          center: new google.maps.LatLng(
            mapCentre.latitude,
            mapCentre.longitude
          )
        };
        this.map = new google.maps.Map(element, options);
        this.markerCoordinates.map(coord => {
          const position = new google.maps.LatLng(
            coord.latitude,
            coord.longitude
          );
          const marker = new google.maps.Marker({
            position,
            map: this.map,
            title: coord.name
          });
          this.markers.push(marker);
          self = this;
          this.map.fitBounds(this.bounds.extend(position));
          {
            marker.addListener("click", function() {
              let markerInfo = {
                lat: this.getPosition().lat(),
                lng: this.getPosition().lng()
              };
              console.log(this);
              self.$emit("locdata", markerInfo);
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
          }
        });
      })
      .catch(error => console.log(error));
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
