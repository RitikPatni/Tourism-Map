<template>
  <gmap-map
    :center="center"
    :zoom="5"
    style="width: 900px; height: 800px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
const endpoint =
  "https://gist.githubusercontent.com/RitikPatni/366a1fff43e0d92f81688ee7a83dbf47/raw/9d01169fe3749b280cad1cea80af22e1eb2d5934/tourist-places.json";
var locations = [
  {
    // name: "Hawa Mahal",
    lat: 26.923936,
    lon: 75.826744
  },
  {
    // name: "Tapri-The Tea House",
    lat: 26.905601,
    lon: 75.811182
  },
  {
    // name: "Naturals Ice Cream",
    lat: 26.911069,
    lon: 75.795331
  },
  {
    // name: "Peacock Rooftop",
    lat: 26.916215,
    lon: 75.795603
  },
  {
    // name: "Curious Life Coffee",
    lat: 26.904097,
    lon: 75.79702
  }
];
const markers = [];
export default {
  mounted() {
    var self = this;
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => markers.push(...data));
    // for (location in locations) {
    //   position => lat.push(...data.lat);
    // }
    // console.log(locations);
  },
  data() {
    console.log(markers[0]);
    console.log(locations);
    return {
      markers,
      center: { lat: 20.5937, lng: 78.9629 },
      markers: [
        { position: { lat: locations[0].lat, lng: locations[0].lon } },
        { position: { lat: locations[1].lat, lng: locations[1].lon } }
      ]
    };
  }
};
</script>
