<template>
  <div class="search-bar">
    <input class="search-field" v-model="query" placeholder="Looking for places...">
    <router-link to="/"><i class="fa fa-times"></i></router-link>
    <ul id="example-1">
  <li v-for="city in cities" :key="city.cityName">
    {{ city.city }}
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
  mounted() {
    var self = this;
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => cities.push(...data));
    console.log(cities);
  },
  data() {
    console.log(cities);
    return {
      cities
    };
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
