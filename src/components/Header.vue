<template>
  <div class="header-component">
    <div v-if="show" class="header">
      <h1 class="heading">Tourism Map</h1>
    </div>
    <button class="fa fa-info-circle toggle-button" @click="show = !show">
      Help
    </button>
  </div>
</template>

<style scoped>
.header-component {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.header {
  background: #191919;
  height: 15vh;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toggle-button {
  outline: none;
  height: 40px;
  text-align: center;
  width: 90px;
  background: #fff;
  border: 2px solid #42454c;
  color: #42454c;
  letter-spacing: 1px;
  text-shadow: 0;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.25s ease;
}
.toggle-button:hover {
  color: #ffffff;
  background: #42454c;
}
.heading {
  text-align: center;
}
.slide-fade-enter-active {
  transition: all 500ms ease;
}
.slide-fade-leave-active {
  transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-15vh);
  opacity: 0;
}
</style>
<script>
export default {
  name: "Header",
  props: { show: true }
};
</script>
