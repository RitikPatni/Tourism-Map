<template>
  <div>
    <transition name="slide-fade">
      <div v-if="show" class="sidenav">
        <div class="sidenav__container">
          <locPic :locName="mapInfo" :photoInfo="photoInfo"></locPic>
          <weather :weatherInfo="weatherInfo"></weather>
          <locInfo :iconUrl="iconUrl" :locName="mapInfo"></locInfo>
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
  background: #2f3647;
  &__container {
    margin-left: 5%;
    margin-right: 5%;
  }
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
import locInfo from "./LocInfo";
export default {
  name: "side-nav",
  components: {
    weather,
    locPic,
    locInfo
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
    iconUrl: {
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
