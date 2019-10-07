<template>
  <v-app>

    <the-header></the-header>

    <v-layout justify-center align-center row>
    <!--<the-sidebar></the-sidebar>-->

    <v-content>

      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>

    </v-content>
    
    </v-layout>

      <!--<the-footer></the-footer>-->

  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheSidebar from './components/TheSidebar.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: "app",
  components: {
    TheHeader,
    //TheSidebar,
    //TheFooter
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

body {
  position: fixed; // Prevents overscrolling rubber-banding on mobile devices
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  background: rgb(20, 20, 20) url('./assets/background.png') repeat;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: rgba(0,0,0,0); // Body is background
}
.description {
    display: flex;
    align-items: center;
    background: url('assets/zigZagDark.png') repeat;
    min-height: 10em;
    p {
      line-height: 2.0;
      font-size: 1.2em;
      margin: auto;
      max-width: 85%;
    }
}
.icon {
  height: 1.6em;
}
// Gradients
.grad-blue-ldl {
    background-image: linear-gradient( 135deg,rgb(0, 124, 240) 5%, rgba(0, 62, 207, 1) 35%, rgba(0, 62, 207, 1) 65%, rgb(0, 124, 240) 95%);
}
.grad-blue-dl {
    background-image: linear-gradient( 105deg, rgb(3, 69, 131) 10%, rgb(5, 67, 211) 75%, rgb(33, 94, 236) 100%);
}
</style>
