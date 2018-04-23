<template>
  <div class="sidenav__weather ">
    <h3 class="sidenav__weather__heading">Weather</h3>
    <div class="sidenav__weather__widget">
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunrise">{{`${this.weatherInfo.coord.lat}`}}</div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunset">{{`${this.weatherInfo.coord.lon}`}}</div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--wind"></div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--humidity"></div>
    </div>
  </div>
</template>
<style>
.sidenav__weather__widget {
  max-height: 20vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15px;
}
.sidenav__weather__widget__box {
  width: 44%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 40px;
  background: #fff;
  margin: 0.5% 1%;
}
</style>

<script>
export default {
  name: "weather",
  props: {
    weatherInfo: {
      required: true
    }
  }
};
</script>
