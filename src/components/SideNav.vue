<template>
  <div>
    <transition name="slide-fade">
      <div v-if="show" class="sidenav">
        <div class="container">
          <locPic :locName="mapInfo" :photoInfo="photoInfo"></locPic>
          <weather :weatherInfo="weatherInfo" :sun="sun"></weather>
        </div>
      </div>
    </transition>
  </div>
</template>
 <style lang="scss">
.sidenav {
  width: 300px;
  height: 100vh;
  z-index: 2;
}
.sidenav__navigate {
  background: darkslategray;
  width: 100%;
  height: 20%;
  display: flex;
  align-content: center;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
<script>
import weather from "./weather";
import locPic from "./picture";
export default {
  name: "side-nav",
  components: {
    weather,
    locPic
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    mapInfo: {
      required: true
    },
    latlon: {
      required: true
    },
    photoInfo: {
      required: true
    },
    weatherInfo: {
      required: true
    },
    sun: {
      required: true
    }
  },
  data: function() {
    return {
      mapLocInfo: null
    };
  }
};
</script>
