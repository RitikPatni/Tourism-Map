<template>
<div class="google-Map">
  <google-map class="google-map" name="example"></google-map>
</div>
</template>
<script>
export default {
  name: "testMap",
  props: ["name"],
  data: function() {
    return {
      mapName: this.name + "-map"
    };
  },
  mounted: function() {
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527, -0.1921837)
    };
    const map = new google.maps.Map(element, options);
  }
};
</script>
