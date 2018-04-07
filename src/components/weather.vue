<template>
  <div class="sidenav__weather ">
    <h3 class="sidenav__weather__heading">Weather</h3>
    <div class="sidenav__weather__widget">
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunrise"></div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunset"></div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--wind"></div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--humidity"></div>
    </div>
  </div>
</template>
<style>
.sidenav__weather__widget {
  height: 20vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 15px;
}
.sidenav__weather__widget__box {
  width: 125px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 40px;
  background: #fff;
  margin-left: 5px;
}
</style>

<script>
export default {
  name: "weather"
};
</script>
