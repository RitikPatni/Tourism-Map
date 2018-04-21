<template>
  <div class="sidenav__navigate">
    <button class="btn sidenav__navigate__button" @click="callMe">Navigate
      <i class="fa fa-paper-plane"></i>
    </button>
  </div>
</template>
<style <style lang="scss">
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
</style>
<script>
export default {
  name: "navigate",
  methods: {
    callMe() {
      this.$emit("getNaviPath");
    }
  }
};
</script>

