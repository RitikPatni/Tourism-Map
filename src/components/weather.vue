<template>
  <div class="sidenav__weather ">
    <h3 class="sidenav__weather__heading">Weather</h3>
    <div class="sidenav__weather__widget">
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunrise">
        <div class="sidenav__weather__widget__box__icon">
          🌅
        </div>
        <div class="sidenav__weather__widget__box__content">
          <div class="sidenav__weather__widget__box__content__context">
            Sunrise
          </div>
          <div class="sidenav__weather__widget__box__content__value">
            {{`${this.sun.rise}`}}
          </div>
        </div>
      </div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--sunset">
        <div class="sidenav__weather__widget__box__icon">
          🌅
        </div>
        <div class="sidenav__weather__widget__box__content">
          <div class="sidenav__weather__widget__box__content__context">
            Sunset
          </div>
          <div class="sidenav__weather__widget__box__content__value">
            {{`${this.sun.set}`}}
          </div>
        </div>
      </div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--wind">💨</div>
      <div class="sidenav__weather__widget__box sidenav__weather__widget__box--humidity"></div>
    </div>
  </div>
</template>
<style lang="scss">
.sidenav__weather {
  margin-top: 10%;
  &__widget {
    max-height: 20vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 15px;
    &__box {
      width: 47%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      height: 40px;
      background: #fff;
      margin: 0.5% 1%;
      &__icon {
        position: absolute;
        margin-left: 14px;
        line-height: 5vh;
      }
      &__content {
        padding: 0.5rem 1rem 0rem;
        &__value {
          font-size: 0.9rem;
          font-weight: 600;
          position: relative;
          margin-left: 25px;
        }
        &__context {
          font-size: 0.6rem;
          font-weight: 400;
          position: relative;
          margin-left: 25px;
          color: #9fa9b5;
        }
      }
    }
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
  name: "weather",
  props: {
    weatherInfo: {
      required: true
    },
    sun: {
      required: true
    }
  }
};
</script>
