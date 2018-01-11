<template>
  <div class="search">
   <router-link to="/SearchBar" class="search-button"><i class="fa fa-search"></i></router-link> 
  </div>
</template>

<script>
export default {
  name: "SearchButton",
  data() {
    return {};
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
