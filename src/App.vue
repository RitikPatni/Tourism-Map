<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
body {
  font-family: "Roboto", sans-serif;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
