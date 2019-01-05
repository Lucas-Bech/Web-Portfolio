<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="./">Home</router-link>
        <router-link to="/DogFetcher">Dog Fetcher</router-link>
        <router-link to="/Skills">Skills</router-link>
      </nav>
    </header>
    <router-view/>
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
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

html,
body {
  width: 100%;
  height: 100%;
  background-color: #0e0b16;
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
}
footer {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
}
nav {
  padding: 20px 20px 20px 0px;
  margin: 10px;
  a {
    padding: 10px;
    text-decoration: none;
    background: #4717f6;
    border-radius: 3px;
    color: #e7dfdd;
    font-weight: bold;
    margin-right: 15px;
    &:hover {
      background-color: #2700b3;
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
// #1A2930  #F7CE3E  #0A1612  #0F1626  #031424  #1A0315  #3C3C3C  #F9BE02  #192231  #494E6B  #414141  #22252C
</style>
