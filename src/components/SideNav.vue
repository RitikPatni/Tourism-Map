<template>
  <div>
    <button @click="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <div v-if="show" class="sidenav"></div>
    </transition>
  </div>
</template>
<style scoped>
.sidenav {
  width: 300px;
  height: 85vh;
  background: #b00b55;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
<script>
export default {
  name: "SideNav",
  props: {
    show: true
  }
};
</script>
