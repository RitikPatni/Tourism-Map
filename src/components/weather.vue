<template>
  <div class="weather ">
    <h3 class="weather__heading">WEATHER</h3>
    <div class="weather__widget">
      <div class="weather__widget__box weather__widget__box--sunrise">
        <div class="weather__widget__box__icon">
          🌅
        </div>
        <div class="weather__widget__box__content">
          <div class="weather__widget__box__content__context">
            SUNRISE
          </div>
          <div class="weather__widget__box__content__value">
            {{`${this.weatherInfo.data[0].sunrise}`}}
          </div>
        </div>
      </div>
      <div class="weather__widget__box weather__widget__box--sunset">
        <div class="weather__widget__box__icon">
          🌅
        </div>
        <div class="weather__widget__box__content">
          <div class="weather__widget__box__content__context">
            SUNSET
          </div>
          <div class="weather__widget__box__content__value">
            {{`${this.weatherInfo.data[0].sunset}`}}
          </div>
        </div>
      </div>
      <div class="weather__widget__box weather__widget__box--wind">
        <div class="weather__widget__box__icon">
          💨
        </div>
        <div class="weather__widget__box__content">
          <div class="weather__widget__box__content__context">
            WIND
          </div>
          <div class="weather__widget__box__content__value">
            {{`${this.weatherInfo.data[0].wind_spd.toFixed(2)} K/H`}}
          </div>
        </div>
      </div>
      <div class="weather__widget__box weather__widget__box--temp">
        <div class="weather__widget__box__icon">
          💨
        </div>
        <div class="weather__widget__box__content">
          <div class="weather__widget__box__content__context">
            WIND
          </div>
          <div class="weather__widget__box__content__value">
            {{`${this.weatherInfo.data[0].temp.toFixed(1)} °C `}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style lang="scss">
.weather {
  margin-top: 10%;
  &__heading {
    font-weight: 600;
    color: #9fa9b5;
  }
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
        line-height: 4.8vh;
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
          font-size: 0.8rem;
          font-weight: 400;
          position: relative;
          margin-left: 25px;
          color: #9fa9b5;
        }
      }
    }
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
