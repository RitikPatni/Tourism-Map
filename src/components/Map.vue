<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
export default {
  name: "googleMap",
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [
        {
          latitude: 26.5,
          longitude: 75,
          name: "Hawa Mahal"
        },
        {
          latitude: 26.7,
          longitude: 75.3,
          name: "NaharGarh"
        },
        {
          latitude: 26.3,
          longitude: 75.1,
          name: "Udaipur"
        }
      ],
      map: null,
      bounds: null,
      markers: []
    };
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
          console.log(this.getPosition().lat(), this.getPosition().lng());
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
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
