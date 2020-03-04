<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
body,
html {
  padding: 0;
  margin: 0;
  height: 100%;
}
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f5f7fa;
  height: 100%;
}
</style>
