<template>
  <div id="app">
    <div id="top">
      <header>
        <nav>
          <router-link to="/Home">Home</router-link>
          <router-link to="/DogFetcher">Dog Fetcher</router-link>
          <router-link to="/Skills">Skills</router-link>
        </nav>
      </header>
      <router-view/>
    </div>
    <footer>
      <a id="github-logo" href="https://github.com/Lucas-Bech">
        <img src="./assets/GitHub_logo.png" alt="https://github.com/Lucas-Bech">
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

$sweetBlue: #1A2930;
$darkBlue1: #0F1626;
$darkBlue2: #031424;
$darkBlue3: #192231;
$darkGreen: #0A1612;
$lightViolet: #494E6B;
$vividYellow: #F9BE02;
$blandYellow: #F7CE3E;
$brownGrey: #414141;
$darkViolet: #22252C;

html,
body {
  width: 100%;
  height: 100%;
  background: url('./assets/bg_prism.png');
  margin: 0;
}
#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  margin: 0;
  
}
#top {
  min-height: 100vh;
  width: 100vw;
  background: url('./assets/background.svg') no-repeat;
  background-size: cover;
  padding-bottom: 200px;
}
header {
  float: right;
  padding: 20px;
}
footer {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  margin-top: 3em;
  background-color: $sweetBlue;
}
nav {
  position: relative;
  left: -100px;
  float: right;
  padding: 20px 20px 20px 0px;
  margin: 10px;
  a {
    padding: 10px;
    text-decoration: none;
    background: #4717f6;
    border-radius: 3px;
    color: #e7dfdd;
    font-weight: bold;
    margin: .9em;
    &:hover {
      background-color: #2700b3;
      background: $vividYellow;
      transition: background .2s;
    }
  }
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
