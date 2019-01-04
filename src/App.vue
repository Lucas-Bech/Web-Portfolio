<template>
  <div id="app">
   
     <nav>
      <router-link to="./">Home</router-link>      
      <router-link to="./DogFetcher">Dog Fetcher</router-link>
      <router-link to="./About">About</router-link>
    </nav>

    <router-view/>
  </div>
</template>

<script>
import Skills from "./components/Skills.vue";
import DogFetcher from "./components/DogFetcher.vue";

export default {
  name: "app",
  components: {
    Skills,
    DogFetcher
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #0E0B16;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  position: relative;
}
nav {
  padding: 20px 20px 20px 0;
  a {
    padding: 10px;
    text-decoration: none;
    background: #4717F6;
    border-radius: 3px;
    color: #E7DFDD;
    font-weight: bold;
    margin-right: 15px;
  }
}

// #1A2930  #F7CE3E  #0A1612  #0F1626  #031424  #1A0315  #3C3C3C  #F9BE02  #192231  #494E6B  #414141  #22252C
</style>
