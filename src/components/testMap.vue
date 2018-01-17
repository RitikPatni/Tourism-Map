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
  "https://gist.githubusercontent.com/RitikPatni/366a1fff43e0d92f81688ee7a83dbf47/raw/a54518c671ebbc98739a628aab4ee3b9fb77e614/tourist-places.json";
const markers = [];
export default {
  mounted() {
    var self = this;
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => markers.push(...data));
  },
  data() {
    console.log(markers)
    return {
      markers,
      center: { lat: 20.5937, lng: 78.9629 },
      markers: [{ position: { lat:26, lng: 78.9614 } }]
    };
  }
};
</script>
