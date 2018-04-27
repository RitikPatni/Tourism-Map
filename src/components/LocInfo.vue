<template>
  <div class="location-info">
    <div class="location-info__heading">
      LOCATION DETAILS
    </div>
    <ul class="location-info__detail ">
      <li class="location-info__detail__item">
        State
      </li>
      <li class="location-info__detail__item">
        GPS
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
      height: 5vh;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      padding-left: 8%;
      border-radius: 8px;
    }
    li:nth-of-type(odd) {
      background: #dcdfe4;
    }

    li:first-of-type {
      margin-top: 5%;
    }
  }
}
</style>
<script>
export default {
  name: "locInfo"
};
</script>
