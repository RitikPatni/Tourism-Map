<template>
  <div>
    <transition name="slide-fade">
      <div v-if="show" class="sidenav">
        <navigate></navigate>
        <div class="container">
          <locPic :locName="mapInfo"></locPic>
          <weather></weather>
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
import navigate from "./navigate";
export default {
  name: "side-nav",
  components: {
    weather,
    locPic,
    navigate
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
    }
  },
  data: function() {
    return {
      mapLocInfo: null
    };
  }
  // methods: {
  //   showLocInfo() {
  //     console.log("NORMAL(ONCLICK)", this.latlon);
  //   }
  // },
  // async created() {
  //   console.log("ASYNC", this.latlon);
  // },
  // mounted: function() {
  //   console.log("MOUNTED", this.latlon);
  // }
};
</script>
