<template>
  <div class="header-component">
    <transition name="slide-top">
      <div v-if="show" class="header">
        <a href="#" class="close"></a>
      </div>
    </transition>
    <button class=" toggle__button toggle__button--header ">
      Help
    </button>
  </div>
</template>

 <style lang="scss" scoped>
.header-component {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.header {
  background: #000000;
  color: #fff;
  height: 300px;
  width: 100%;
  display: grid;
  z-index: 2;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 33% auto 33%;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "h h h h h h h h h h h h"
    "h h h h h h h h h h h h";
}
.slide-top-enter-active {
  transition: all 0.3s ease;
}
.slide-top-leave-active {
  transition: all 0.3s ease;
}

.slide-top-enter,
.slide-top-leave-to {
  transform: translateY(-300px);
  opacity: 0;
}

.heading {
  text-align: center;
}
</style>
<script>
export default {
  name: "Header",
  props: { show: true }
};
</script>
