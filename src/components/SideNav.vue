<template>
  <div>
    <transition name="slide-fade">
      <div v-if="show" class="sidenav">
        <div class="sidenav__navigate">
          <button class="btn sidenav__navigate__button">Navigate
            <i class="fa fa-paper-plane"></i>
          </button>
        </div>
        <div class="container">
          <div class="sidenav__location-picture">
            <h3 class="sidenav__location-picture__heading">Some Place,Some State</h3>
            <div class="sidenav__location-picture__img">
              <img alt="An awesome Picture" class="sidenav__location-picture__img" src="https://c1.hiqcdn.com/customcdn/crop/250x200/photos/co/cover-photo-55467-JPG-images-packages-720x512-1474610240-cropped.JPG"></img>
            </div>
          </div>
          <div class="sidenav__weather ">
            <h3 class="sidenav__weather__heading">Weather</h3>
            <div class="sidenav__weather__widget">
              <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunrise"></div>
              <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunset"></div>
              <div class="sidenav__weather__widget__box sidenav__weather__widget__box--wind"></div>
              <div class="sidenav__weather__widget__box sidenav__weather__widget__box--humidity"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <button class="toggle__button toggle__button--sidenav ">
      Toggle render
    </button>
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
.sidenav__location-picture {
  text-align: center;
  padding-top: 2%;
}
.sidenav__location-picture__img {
  border-radius: 3px;
  padding-top: 2%;
}
.sidenav__weather__widget {
  height: 20vh;
  width: 100%;
}

.sidenav__navigate__button {
  margin: 3px auto;
  height: 30px;
  border-radius: 20px;
  background: #fff;
  border: none;
  &:focus {
    outline: none;
  }
}
.sidenav__weather__widget {
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
  name: "side-nav",
  props: {
    show: {
      type: Boolean,
      required: true
    },
    mapInfo: {
      required: true
    }
  }
};
</script>
