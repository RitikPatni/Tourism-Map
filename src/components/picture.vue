<template>
  <div class="sidenav__location-picture">
    <h3 class="sidenav__location-picture__heading">{{`${this.locName[0].name},${this.locName[0].location.city}`}}</h3>
    <div class="sidenav__location-picture__img">
      <img alt="An awesome Picture" class="sidenav__location-picture__img" src="https://c1.hiqcdn.com/customcdn/crop/250x200/photos/co/cover-photo-55467-JPG-images-packages-720x512-1474610240-cropped.JPG"></img>
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
