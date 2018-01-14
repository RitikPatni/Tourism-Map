<template>
  <div class="search">
   <router-link to="/SearchBar" class="search-button"><i class="fa fa-search"></i></router-link>
     <google-map
  name="example"
></google-map>
  </div>
</template>

<script>
export default {
  name: "SearchButton",
  data() {
    return {};
  },
  name: "googleMaps",
  props: ["name"],
  data() {
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

<style lang="scss">
.search {
  display: grid;
  height: 100vh;
  grid-template-columns: 100px auto 100px;
  grid-template-rows: repeat(12, 1fr);
  grid-template-areas: "n n n n n n n n n n n s" "c c c c c c c c c c c c"
    "f f f f f f f f f f f f";
}
.search-button {
  grid-area: s;
}
</style>
