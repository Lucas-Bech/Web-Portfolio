<template>
    <v-app v-cloak>
        <Header/>
      <v-content id="main-content">
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
        <Footer/>
    </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: "app",
  components: {
    Header,
    Footer
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
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: url('./assets/darkPrism.png') repeat;
}
</style>