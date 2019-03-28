<template>
  <div class="location-info">
    <div class="location-info__heading">LOCATION DETAILS</div>
    <ul class="location-info__detail">
      <li class="location-info__detail__item">
        <div class="location-info__detail__item__cat">Category</div>
        <div class="location-info__detail__item__name">
          <div class="location-info__detail__item__name__image">
            <img :src="this.iconUrl" alt>
          </div>
          <div
            class="location-info__detail__item__name__text"
          >{{`${this.locName[0].categories[0].name}`}}</div>
        </div>
      </li>
      <li class="location-info__detail__item">
        <div class="location-info__detail__item__cat">GPS</div>
        <div class="location-info__detail__item__name">
          <div
            class="location-info__detail__item__name__text"
          >{{`${this.locName[0].location.lat.toFixed(1)}, ${this.locName[0].location.lng.toFixed(1)}`}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.location-info {
  margin-top: 10%;
  &__heading {
    font-weight: 600;
    color: #9fa9b5;
  }
  &__detail {
    &__item {
      height: 6vh;
      line-height: 6vh;
      display: flex;
      padding-left: 8%;
      border-radius: 8px;
      &__cat {
        width: 38.1%;
      }
      &__name {
        width: 71%;
        padding-left: 10%;
        display: flex;
        &__image {
          width: 44px;
          height: 6vh;
        }
        &__text {
          width: calc(100% - 44px);
          line-height: 6vh;
        }
      }
    }
    li:nth-of-type(odd) {
      background: #191919;
      color: #fafafa;
    }
    li:nth-of-type(even) {
      background: #fafafa;
    }

    li {
      margin-top: 5%;
    }
  }
}
</style>
<script>
export default {
  name: "locInfo",
  props: {
    locName: {
      required: true
    },
    iconUrl: {
      required: true
    }
  }
};
</script>
