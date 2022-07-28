<template>
  <div class="layout--main navbar-sticky footer-static">
    <TheNavbar />
    <div id="content-area" class="content-area-default">
      <div id="main-content" class="relative content-wrapper">
        <div class="the-navbar bg-white">
          <TheHeader />
        </div>

        <TheContent />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheContent from "./components/layout/TheContent.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheNavbar,
    TheContent,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
@import url(./css/main.css);
</style>
