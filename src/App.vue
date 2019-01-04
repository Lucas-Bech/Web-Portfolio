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
  background-color: rgba(48, 46, 46, 0.664);
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
    background: #fff;
    border-radius: 3px;
    color: rgb(0, 110, 255);
    font-weight: bold;
    margin-right: 15px;
  }
}
</style>
