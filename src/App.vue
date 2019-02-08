<template>
    <v-app v-cloak>
        <TheHeader/>
      <v-content id="main-content">
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
        <TheFooter/>
    </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

[v-cloak] {
  display: none !important;
}
html,
body {
  position: fixed; // Disables overscrolling rubber-banding on mobile devices
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  background: url('./assets/darkPrism.png') repeat;
}
#main-content {
  width: 100vw;
}
#app {
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('./assets/darkPrism.png') repeat;
}
.grad-blue-ldl {
    background-image: linear-gradient( 135deg,rgb(0, 124, 240) 5%, rgba(0, 62, 207, 0.74) 35%, rgba(0, 62, 207, 0.521) 65%, rgb(0, 124, 240) 95%);
}
.grad-blue-dl {
    background-image: linear-gradient( 105deg, rgb(3, 69, 131) 10%, rgb(5, 67, 211) 75%, rgb(33, 94, 236) 100%);
}
</style>