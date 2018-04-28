<template>
  <div class="location-picture">
    <h3 class="location-picture__heading">{{`${this.locName[0].name}, ${this.locName[0].location.city}`}}</h3>
    <div class="location-picture__img">
      <img :alt="`${this.locName[0].name}`" class="location-picture__img" :src="this.photoInfo" />
    </div>
  </div>
</template>
<style <style lang="scss">
.location-picture {
  padding-top: 2%;
  &__img {
    text-align: center;
    border-radius: 3px;
    padding-top: 2%;
  }
  &__heading {
    font-weight: 600;
  }
  &__heading::before {
    content: "";
    display: inline-block;
    position: relative;
    top: calc(-0.1 * 1em);
    vertical-align: middle;
    height: 0.9em;
    margin-right: 10px;
    border-left: 5px solid #e2e7ec;
  }
}
</style>
<script>
export default {
  name: "locPic",
  props: {
    locName: {
      required: true
    },
    photoInfo: {
      required: true
    }
  }
};
</script>
