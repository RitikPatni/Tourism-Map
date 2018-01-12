<template>
  <div class="search-bar">
    <input class="search-field" v-model="query" placeholder="Looking for places...">
    <router-link to="/"><i class="fa fa-times"></i></router-link>
    <ul id="example-1">
  <li v-for="city in cities" :key="city.cityName">
    {{ value }}
  </li>
</ul>
  </div>
</template>

<script>
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
export default {
  name: "SearchBar",
  data() {
    return {
      cities: [
        {
          city: "New York",
          growth_from_2000_to_2013: "4.8%",
          latitude: 40.7127837,
          longitude: -74.0059413,
          population: "8405837",
          rank: "1",
          state: "New York"
        },
        {
          city: "Los Angeles",
          growth_from_2000_to_2013: "4.8%",
          latitude: 34.0522342,
          longitude: -118.2436849,
          population: "3884307",
          rank: "2",
          state: "California"
        },
        {
          city: "Chicago",
          growth_from_2000_to_2013: "-6.1%",
          latitude: 41.8781136,
          longitude: -87.6297982,
          population: "2718782",
          rank: "3",
          state: "Illinois"
        }
      ]
    };
  },
  mounted() {
    // when the Vue app is booted up, this is run automatically.
    var self = this; // create a closure to access component in the callback below
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => cities.push(...data));
    console.log(cities);
  }
};
</script>

<style lang="scss">
.search-bar {
  display: flex;
  height: 100vh;
  //   align-items: center;
  justify-content: center;
  background: rgba($color: tomato, $alpha: 0.6);
  transition: all 1s;
}
.search-field {
  text-align: center;
  border-bottom: 5px solid #444;
  width: 60vw;
  height: 20vh;
  font-size: 3rem;
  background: rgba($color: tomato, $alpha: 0.6);
}
</style>
