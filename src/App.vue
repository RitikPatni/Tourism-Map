<template>
  <div id="app">
    <Header></Header>
    <div class="wrapper">
      <SideNav></SideNav>
      <googleMap name="example" @clicked="onClickChild"></googleMap>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import SideNav from "./components/SideNav";
import googleMap from "./components/Map";
export default {
  name: "app",
  components: {
    Header,
    SideNav,
    googleMap
  },
  onClickChild: function(value) {
    console.log(value); // someValue
  }
};
</script>
<style>
.wrapper {
  display: flex;
}
</style>


<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

* {
  margin: 0%;
  padding: 0%;
  border: 0px;
  font-family: "Roboto", sans-serif;
}
</style>
