<template>
  <v-toolbar 
  app 
  dark 
  id="the-header" 
  class="animated slideInLeft">
    <v-toolbar-title class="headline">Personal Website - Lucas Bech</v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items>
      <!--<v-btn flat to="/Home">Home</v-btn>-->
      <v-btn flat to="/Portfolio">Portfolio</v-btn>
      <!--<v-btn flat to="/AI">Artificial Intelligence</v-btn>-->
      <v-btn flat to="/About">About</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style lang="scss" scoped>
#the-header {
  background-image: linear-gradient( 135deg,rgb(0, 62, 207) 20%, rgb(0, 124, 240) 50%, rgb(0, 62, 207) 80%);
  background-image: linear-gradient(90deg, rgb(27, 26, 26), rgb(24, 26, 32));
}
</style>
