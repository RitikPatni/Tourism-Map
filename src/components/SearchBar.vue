<template>
  <div class="search-bar">
    <input class="search-field" v-model="query" placeholder="Looking for places...">
    <router-link to="/"><i class="fa fa-times"></i></router-link>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {};
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
