<template>
  <div id="app">
      <Header/>
      <router-view/>
      <Footer/>
  </div>
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
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background: url('./assets/darkPrism.png') repeat;
}
#app {
  display: grid;
  grid-template-areas: 
  "header"
  "main"
  "footer";
  grid-template-rows: .1fr 1fr .1fr;
  grid-row-gap: 10vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  min-height: 100%;
}
#github-logo {
  img {
    height: auto;
    width: 15%;
    background-color: #192231;
    float: left;
  }
}                     
</style>
