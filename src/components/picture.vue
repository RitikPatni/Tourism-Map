<template>
  <div class="sidenav__location-picture">
    <h3 class="sidenav__location-picture__heading">{{`${this.locName[0].name},${this.locName[0].location.city}`}}</h3>
    <div class="sidenav__location-picture__img">
      <img alt="An awesome Picture" class="sidenav__location-picture__img" src="https://ss3.4sqi.net/img/categories_v2/original/parks_outdoors/neighborhood.png"></img>
    </div>
  </div>
</template>
<style>
.sidenav__location-picture {
  text-align: center;
  padding-top: 2%;
}
.sidenav__location-picture__img {
  border-radius: 3px;
  padding-top: 2%;
}
</style>
<script>
export default {
  name: "locPic",
  props: {
    locName: {
      required: true
    }
  }
};
</script>
