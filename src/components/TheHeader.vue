<template>
  <v-toolbar 
  app 
  dark 
  id="the-header" 
  class="animated slideInLeft">
    <v-toolbar-title class="headline">Portfolio - Lucas Bech</v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items>
      <v-btn flat to="/Home">Forside</v-btn>
      <v-btn flat to="/Portfolio">Projekter</v-btn>
      <!--<v-btn flat to="/AI">Artificial Intelligence</v-btn>-->
      <!--<v-btn flat to="/About">About</v-btn>-->
    </v-toolbar-items>
  </v-toolbar>
</template>

<style lang="scss" scoped>
#the-header {
  background-image: linear-gradient(90deg, rgb(3, 44, 182), rgb(202, 65, 1));
}
</style>
